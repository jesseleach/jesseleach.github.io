import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

export function About() {
  return (
    <div className="About">
      <div>
        <NavLink to="/">Home</NavLink>

        <div className="aboutText">
        <h1>About</h1>
        <p>
          I am jesse I'm a front end developer living in Brooklyn Mars. I
          enjoy martial arts and cooking. I am always curious to learn more
          about new technologies and coding.
        </p>
        <a href="https://pdfhost.io/v/DXngYO2~r_JesseResumeSE2024">resume</a>
        <div>
        <a href="https://github.com/jesseleach">github</a>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/jesseleach/">linkedin</a>
        </div>
       

       
        </div>
       
      </div>
      <img src="ProfilePic.jpg" alt="profile" className="Profile"></img>
    </div>
  );
}
