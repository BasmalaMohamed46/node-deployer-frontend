import heroImg from "../assets/img/hero-img.svg";
import "../styles/hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
    <section id="hero" className="hero section">
      <div
        className="container d-flex flex-column justify-content-center align-items-center text-center position-relative"
        data-aos="zoom-out"
      >
        <img src={heroImg} className="img-fluid animated" alt="" />
        <h1>
          Your fastest path to <span>Production</span>
        </h1>
        <p>
          Build, deploy, and scale your apps with unparalleled ease – from your
          first user to your billionth.
        </p>
        <div className="d-flex">
          <Link to="#about" className="btn-get-started scrollto nav-link">
            Get Started
          </Link>
          <Link
            to="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            className="glightbox btn-watch-video d-flex align-items-center nav-link"
          >
            <i className="bi bi-play-circle"></i>
            <span>Watch Video</span>
          </Link>
        </div>
      </div>
    </section>
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
      </>
  );
};

export default Hero;
