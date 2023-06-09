import logo from "./logo.svg";
import "./App.css";
import { Projects } from "./Projects";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { Home } from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
        <NavLink to="projects">See My Projects and more changes!! Last one!</NavLink>
      </div>
    </BrowserRouter>
  );
}

export default App;
