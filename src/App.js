import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash/Splash";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash/>} />
      </Routes>
    </Router>
  );
}

export default App;
