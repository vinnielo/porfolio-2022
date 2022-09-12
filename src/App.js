
import {
  BrowserRouter as Router, 
} from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import NavBar from './components/NavBar'

function App() {
  console.log(window.location.pathname)
  return (
    <Router>
      {window.location.pathname !== '/' ? ( <NavBar />) : ('')}      
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
