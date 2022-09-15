import { Routes, Route, useLocation} from "react-router-dom";
import About from "../pages/About/About";
import Splash from "../pages/Splash/Splash";
import Blog from "../pages/Blog/Blog";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Splash />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </AnimatePresence>
  );
}
