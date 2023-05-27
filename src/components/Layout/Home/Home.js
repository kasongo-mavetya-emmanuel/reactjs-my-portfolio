import Hero from "../../Hero/Hero";
import NavBar from "../../NavBar/NavBar";
import About from "../../About/About";
import Skills from "../../Skills/Skills";
import Contact from "../../Contact/Contact";
import Footer from "../../Footer/Footer";

const Home = function () {
  return (
    <div style={{ overflow: "hidden" }}>
      <NavBar />
      <main>
        <Hero />
        <About />
        {/* Projects */}
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
