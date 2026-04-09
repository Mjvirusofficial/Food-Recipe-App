import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import FoodItem from "./pages/foodItem";
import Navbar from "./compoent/navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<FoodItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;