import Hero from "../../Hero/Hero";
import NavBar from "../../NavBar/NavBar";
import About from "../../About/About";

const Home = function () {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default Home;
