import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { Home } from "./Home";

export function Projects() {
  return (
    <div>
         <NavLink to="/">Home</NavLink>
      <h1>Here are my projects</h1>

     
    </div>
  );
}
