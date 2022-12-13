import React from "react";
import "./App.css";
import Project from "./components/Project";
import me from "./images/IMG_20220815_190301.jpg";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <header className="app_header">
        <nav>
          <ul>
            <li>
              <a href="https://blog.gguilt.com">Blog</a>
            </li>
            <li>
              <a href="#about" className="btn btn-primary">
                About
              </a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="headbeat">
          <div className="enterance area">
            <div className="enter_text">
              <h1>Hello, I'm Gökay</h1>
              <h2>I develop highly responsible, modern websites</h2>
              <a href="#contact" className="button">Hire now</a>
            </div>
            <div className="foto_area">
              <img className="foto" src={me} alt="Gökay Gültekin" />
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="area">
        <h2 className="part_header">
          <div className="centeredThing">
            <span className="lineInside">
              About
            </span>
          </div>
        </h2>
        <p className="introText">
          I studied Japanese Language and Literature in Ankara University along
          with Health Information Systems in Başkent University. I can speak
          English, Japanese and Turkish.
        </p>

        <p className="introText">
          I mainly use React, Next.js, TypeScript and Golang. I can use Git, GitHub, Terminal and Linux/BSD systems with ease. I also have knowledge on basics, such as HTML5, CSS (SCSS), Bootstrap.
        </p>
      </section>

      <section id="projects" className="area">
        <h2 className="part_header">
          <div className="centeredThing">
            <span className="lineInside">
              Projects
            </span>
          </div>
        </h2>
        <div className="project_list">
          <Project
            name="Nitoji"
            about="Japanese-Turkish Dictionary"
            tags={["react", "golang", "typescript"]}
          />
          <Project
            name="UsagiSözlük"
            about="Beauty products social media"
            tags={["react", "golang", "typescript"]}
          />
          <Project
            name="Misfits Cosplay"
            about="Cosplay team website"
            tags={["react", "bootstrap"]}
          />
          <Project
            name="Cryptbaba"
            about="Cryptocurrency experiment game"
            tags={["react", "bootstrap"]}
          />
        </div>
      </section>

      <section id="contact" className="area">
        <h2 className="part_header">
          <div className="centeredThing">
            <span className="lineInside">
              Contact
            </span>
          </div>
        </h2>
        <p>
          I am <b>looking</b> for a job. Preferably in Vienna, Austria.
        </p>

        <a href="mailto:ggltekn@gmail.com"><div className="emailButton">Send me an e-Mail</div></a>

        <div className="links">
          <a href="mailto:ggltekn@gmail.com"><FiMail size={32} /></a>
          <a href="https://www.linkedin.com/in/gokaygultekin"><FiLinkedin size={32} /></a>
          <a href="https://www.github.com/gguilt"><FiGithub size={32} /></a>
        </div>
      </section>

      <footer>All rights reserved. 2022. Gökay Gültekin.</footer>
    </div >
  );
}

export default App;
