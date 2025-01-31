import '../styles/pricing.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance } from '../interceptors/auth.interceptor';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Tier {
  id: string;
  name: string;
  price: number;
  cpu: string;
  memory: string;
}

const Pricing = () => {
  const [balance, setBalance] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken: string | null = localStorage.getItem('accessToken');

    if (accessToken) {
      const { id } = jwtDecode(accessToken) as { id: string };
      axiosInstance
        .get(`/user/${id}`)
        .then((res) => {
          const { balance } = res.data;
          setBalance(balance);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const buy = (price: number) => {
    if (balance >= price) {
      const newBalance = balance - price;
      const accessToken: string | null = localStorage.getItem('accessToken');
      if (accessToken) {
        const { id } = jwtDecode(accessToken) as { id: string };
        axiosInstance
          .put(`/user/${id}`, { balance: newBalance })
          .then(() => {
            setBalance(newBalance);
            alert('Tier Successfully Bought');
            navigate('/'); 
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      alert('Not enough balance');
      navigate('/recharge'); 
    }
  };

  const [tiers, setTiers] = useState<Tier[]>([]);
  // const searchParams = new URLSearchParams(window.location.search);
  // const repoId = decodeURIComponent(searchParams.get('repoId'));
  const { repoId } = useParams();

  useEffect(() => {
    getTiers();
  }, []);

  const getTiers = () => {
    try {
      axios
        .get<Tier>('http://localhost:3000/tiers', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then((res) => {
          setTiers(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      // console.log(tiers[0].name);
      console.log(tiers);
    } catch (error) {
      console.error('Error fetching tiers:', error);
    }
  };
  console.log('Tier data:', tiers);

  const handleBuyNowClick = async (id: string) => {
    setLoading(true);
    console.log('Selected Tier ID:', id);
    console.log('Selected repo ID:', repoId);
    console.log('Tier access Token:', localStorage.getItem('accessToken'));

    // const response = await fetch(`http://localhost:3000/deploy/container`, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    //   },
    //   body: JSON.stringify({
    //     tierId: id,
    //     repoId,
    //   }),
    // });

    try{
      const response = await axiosInstance.post('/deploy/container', {
        tierId: id,
        repoId,
      });
      if (response.status === 201) {
       const { ipAddress, containerId } = response.data;
        window.open(`http://${ipAddress}`, '_blank');
        navigate(`/containers/${containerId}/login`);
      }
      console.log(response);
    }catch(err){
      console.log(err);
    }finally{
      setLoading(false);
    }
  };

  return (
    <section id="pricing" className="pricing section">
      <div className="container section-title">
        <h2>Our Pricing</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row gy-4">
            {tiers.map((tier, index) => (
              <div className="col-lg-4" key={tier.id}>
                <div className={`pricing-item ${index === 1 ? 'featured' : ''}`}>
                  <div className="pricing-header">
                    <h3>{tier.name}</h3>
                    <h4>
                      <sup>$</sup>
                      {tier.price}
                      <span> / month</span>
                    </h4>
                  </div>
                  <ul>
                    <li className="">
                      <i className="bi bi-dot"></i>
                      <span>{`${tier.cpu} CPU`}</span>
                    </li>
                    <li className="">
                      <i className="bi bi-dot"></i>
                      <span>{`${tier.memory} RAM`}</span>
                    </li>
                  </ul>

                {
                  repoId &&
                  <div className="text-center mt-auto">
                    <Link to="#" className="buy-btn" onClick={() => handleBuyNowClick(tier.id)}>
                      
                      {loading ? (
                        <>
                          <FontAwesomeIcon icon={faSpinner} spin /> Choose
                        </>
                      ) : (
                        'Choose'
                      )}
                    </Link>
                  </div>
                }
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};
export default Pricing;
