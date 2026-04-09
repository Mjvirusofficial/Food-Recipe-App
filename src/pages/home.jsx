import { Link } from "react-router-dom";
import AllFood from "../compoent/AllFood";
import Hero from "../compoent/Hero";


const Home = () => {
  return (
    <main className="w-full">
      <Hero />
      <div id="menu-section">
        <AllFood/>
      </div>
    </main>
  );
};

export default Home;