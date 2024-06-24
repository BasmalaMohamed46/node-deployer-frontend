import { useEffect } from "react";
import "../styles/services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="featured-services" className="featured-services section">
      <div className="container">
        <div className="row gy-3 justify-content-center  ">
          <div
            className="col-xl-3 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-list-columns-reverse icon"></i>
              </div>
              <h4>
                <Link to="" className="stretched-link nav-link">
                  Choose your service type
                </Link>
              </h4>
              <p>Spin up web services, static sites, cron jobs, and more.</p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-hdd-network icon"></i>
              </div>
              <h4>
                <Link to="" className="stretched-link nav-link">
                  Deploy in seconds
                </Link>
              </h4>
              <p>
                Build and run your apps with lightning speed and flexible
                config.
              </p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-git icon"></i>
              </div>
              <h4>
                <Link to="" className="stretched-link nav-link">
                  Update automatically
                </Link>
              </h4>
              <p>
                Stay current with your code thanks to seamless, automatic
                redeploys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
