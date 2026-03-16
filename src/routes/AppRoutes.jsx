import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Concepts from "../pages/Concepts";
import Designs from "../pages/Designs";
import About from "../pages/About";
import Connect from "../pages/Connect";
import ConceptDetail from "../pages/ConceptDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/concepts" element={<Concepts />} />
      <Route path="/designs" element={<Designs />} />
      <Route path="/about" element={<About />} />
      <Route path="/connect" element={<Connect />} />
     <Route path="/concepts/:conceptId" element={<ConceptDetail />} />
    </Routes>
  );
};

export default AppRoutes;