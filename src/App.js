import About from "./About";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Characters from "./Characters";
import Quotes from "./Quotes";
import Home from "./Home";
import Navthing from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="myContainer">
      <Navthing />
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
