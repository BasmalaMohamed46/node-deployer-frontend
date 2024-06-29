import { useEffect } from "react";
import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Pricing />
      </section>
      <section>
        <Team />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
};

export default LandingPage;
