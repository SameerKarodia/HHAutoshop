import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Detailing from "./Pages/Detailing";
import Brakes from "./Pages/Brakes";
import Lights from "./Pages/Lights";
import Tuneups from "./Pages/Tuneups";
import Oilchange from "./Pages/Oilchange";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detailing" element={<Detailing />} />
        <Route path="/Brakes" element={<Brakes />} />
        <Route path="/Lights" element={<Lights />} />
        <Route path="/Tuneups" element={<Tuneups />} />
        <Route path="/OilChange" element={<Oilchange />} />
      </Routes>
    </Router>
  );
}

export default App;
