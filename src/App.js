import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Splash from "./pages/Splash/Splash";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
