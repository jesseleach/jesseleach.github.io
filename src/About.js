import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

export function About() {
  return (
    <div className="About">
      <div>
        <NavLink to="/">Home</NavLink>

        <div className="aboutText">
        <h1>About</h1>
        <p>
          I am jesse I'm a front end developer living in Brooklyn New York. I
          enjoy martial arts and cooking. I am always curious to learn more
          about new technologies and coding.
        </p>
        </div>
       
      </div>
      <img src="ProfilePic.jpg" alt="profile"></img>
    </div>
  );
}
