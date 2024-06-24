import heroImg from "../assets/img/hero-img.svg";
import "../styles/hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
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
  );
};

export default Hero;
