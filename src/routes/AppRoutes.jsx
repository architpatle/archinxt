import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Concepts from "../pages/Concepts";
import Designs from "../pages/Designs";
import About from "../pages/About";
import Connect from "../pages/Connect";
import ConceptDetail from "../pages/ConceptDetail";
import DesignDetail from "../pages/DesignDetail/DesignDetail";
import Builds from "../pages/Builds";
import BuildDetail from "../pages/BuildDetail/BuildDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/concepts" element={<Concepts />} />
      <Route path="/designs" element={<Designs />} />
      <Route path="/builds" element={<Builds />} />
      <Route path="/about" element={<About />} />
      <Route path="/connect" element={<Connect />} />
     <Route path="/concepts/:conceptId" element={<ConceptDetail />} />
     <Route path="/designs/:designId" element={<DesignDetail />} />
     <Route path="/builds/:slug" element={<BuildDetail />} />
    </Routes>
  );
};

export default AppRoutes;