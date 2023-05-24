import Hero from "../../Hero/Hero";
import NavBar from "../../NavBar/NavBar";
import About from "../../About/About";
import Skills from "../../Skills/Skills";

const Home = function () {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <About />
        {/* Projects */}
        <Skills />
      </main>
    </div>
  );
};

export default Home;
