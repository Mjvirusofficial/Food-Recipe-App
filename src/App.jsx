import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import FoodItem from "./pages/foodItem";
import Navbar from "./compoent/navbar";
import SingleFood from "./compoent/singleFood";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import Footer from "./compoent/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/food/:id" element={<SingleFood />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;