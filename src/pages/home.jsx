import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>



      <h1>Home Page</h1>

      <Link to="/food">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Go to Food Page
        </button>
      </Link>
    </div>
  );
};

export default Home;