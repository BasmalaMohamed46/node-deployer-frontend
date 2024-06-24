import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Team from "../components/Team";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Team />
    </>
  );
};

export default LandingPage;
