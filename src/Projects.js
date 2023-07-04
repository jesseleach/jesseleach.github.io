import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { Home } from "./Home";

const ProjectsConfig = {
  weather: {
    src: "WeatherScreenShot.png",
    alt: "Weather project image",
  },
  guarddogfacts: {
    src: "guardDogsPic.png",
    alt: "Guard Dog Image",
  },
};
export function Projects() {
  const [activeProject, setActiveProject] = useState();

  const handleMouseOver = (project) => () => {
    setActiveProject(project);
  };

  const handleMouseOut = () => {
    setActiveProject(null);
  };

  return (
    <div>
      <div>
        <div></div>

        <div>
          <NavLink to="/" className="return">
            Home
          </NavLink>

          <div className="work">
            <h1 className="workitem">Work</h1>

            <div
              onMouseOver={handleMouseOver("weather")}
              onMouseOut={handleMouseOut}
            >
              <NavLink
                to="https://jesseleach.github.io/weather"
                className="return"
              >
                Weather
              </NavLink>
            </div>

            <div
              onMouseOver={handleMouseOver("guarddogfacts")}
              onMouseOut={handleMouseOut}
            >
            <NavLink
              to="https://jesseleach.github.io/guard-dog-facts"
              className="return"
            >
              Guard Dog Facts
            </NavLink>
            </div>
            <NavLink
              to="https://jesseleach.github.io/newPictureSite"
              className="return"
            >
              Picture Portfolio
            </NavLink>
            <NavLink
              to="https://jesseleach.github.io/playground"
              className="return"
            >
              Reddit Project
            </NavLink>
          </div>

          {activeProject && (
            <div>
              <img
                src={ProjectsConfig[activeProject].src}
                alt={ProjectsConfig[activeProject].alt}
                className="project-image"
              ></img>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
