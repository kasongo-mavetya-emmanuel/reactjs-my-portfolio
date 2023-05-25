import Hero from "../../Hero/Hero";
import NavBar from "../../NavBar/NavBar";
import About from "../../About/About";
import Skills from "../../Skills/Skills";
import Contact from "../../Contact/Contact";

const Home = function () {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <About />
        {/* Projects */}
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
