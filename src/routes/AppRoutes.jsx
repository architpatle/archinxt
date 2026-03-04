import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Concepts from "../pages/Concepts";
import Designs from "../pages/Designs";
import About from "../pages/About";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/concepts" element={<Concepts />} />
      <Route path="/designs" element={<Designs />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;