import logo from "./logo.svg";
import "./App.css";
import { Projects } from "./Projects";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About/>} />
        </Routes>
        
      
      </div>
    </BrowserRouter>
  );
}

export default App;