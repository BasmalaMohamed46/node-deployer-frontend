import { useRef, useEffect } from "react";
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
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const pricingRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* <NavBar  */}
      {/*   heroRef={heroRef} */}
      {/*   servicesRef={servicesRef} */}
      {/*   aboutRef={aboutRef} */}
      {/*   pricingRef={pricingRef} */}
      {/*   teamRef={teamRef} */}
      {/*   contactRef={contactRef} */}
      {/* /> */}
      <section ref={heroRef}><Hero /></section>
      <section ref={aboutRef}><About /></section>
      <section ref={pricingRef}><Pricing /></section>
      <section ref={teamRef}><Team /></section>
      <section ref={contactRef}><Contact /></section>
      <Footer />
    </>
  );
};

export default LandingPage;
