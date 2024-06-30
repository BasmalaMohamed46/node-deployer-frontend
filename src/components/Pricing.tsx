import "../styles/pricing.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

interface Tier {
  id: string;
  name: string;
  price: number;
  cpu: string;
  memory: string;
}

const Pricing = () => {
  const [tiers, setTiers] = useState<Tier>(); 
  const searchParams = new URLSearchParams(window.location.search);
  const repoId = decodeURIComponent(searchParams.get("repoId") || "");

  useEffect(() => {
    getTiers();
  }, []);

  const getTiers = () => {
    try {
      axios.get<Tier>('http://localhost:3000/tiers', {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then(res=>{

        // setTiers(res.data);
        console.log('Tier data:', res.data);
      })
      .catch(error=>{
        console.log(error);
      })
      // console.log(tiers[0].name);
      console.log(tiers);
    } catch (error) {
      console.error('Error fetching tiers:', error);
    }
  };

  const handleBuyNowClick = async (id: string) => {
    console.log("Selected Tier ID:", id);
    console.log("Selected repo ID:", repoId);
    console.log("Tier access Token:", localStorage.getItem("accessToken"));

    const response = await fetch(`http://localhost:3000/deploy/container`, {
      method:'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        tierId: id,
        repoId,
      }),
      
    });

    console.log(response);

  };

  return (
    <section id="pricing" className="pricing section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Pricing</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {tiers.map((tier, index) => (
            <div
              className="col-lg-4"
              data-aos="zoom-in"
              data-aos-delay={200 * (index + 1)}
              key={tier.id}
            >
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

                <div className="text-center mt-auto">
                  <Link
                    to="#"
                    className="buy-btn"
                    onClick={() => handleBuyNowClick(tier.id)}
                  >
                    Choose
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
