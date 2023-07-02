import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { Home } from "./Home";

export function Projects() {
  return (
    <div>
         <NavLink to="/" className="return">Home</NavLink>

        
         
         <div className="work">
         <h1 className="workitem">Work</h1>
         <NavLink to="https://jesseleach.github.io/weather" className="return">Weather</NavLink>
         <NavLink to="https://jesseleach.github.io/guard-dog-facts" className="return">Guard Dog Facts</NavLink>
         <NavLink to="https://jesseleach.github.io/newPictureSite" className="return">Picture Portfolio</NavLink>
         <NavLink to="https://jesseleach.github.io/playground" className="return">Reddit Project</NavLink>
         </div>
     
         <div className="box"></div>
     
    </div>

    
  );
}
