import React, { useEffect } from "react";
import Hero from "../../Hero/Hero";
import NavBar from "../../NavBar/NavBar";
import About from "../../About/About";
import Skills from "../../Skills/Skills";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";
import Projects from "../../Projects/Projects";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = function () {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
