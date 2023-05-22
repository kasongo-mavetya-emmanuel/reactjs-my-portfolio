import Hero from "../../Hero/Hero";
import NavBar from "../../NavBar/NavBar";

const Home = function () {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;
