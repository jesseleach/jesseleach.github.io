import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

export function Home() {
  return (
    <div className="background">

<div className="home">
      <h1>Hi I'm Jesse Leach</h1>
      <p>I'm a front end devoloper based in Brooklyn New York</p>
      <NavLink to="projects" className="projects">
          See My Projects
        </NavLink>
        <NavLink to="about" className="projects">More About me</NavLink>
        
      </div>

    </div>


    
  );
}
