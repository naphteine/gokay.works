import React from "react";
import "./App.css";
import Project from "./components/Project";
import me from "./images/IMG_20220815_190301.jpg";

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
          <div className="enterance">
            <div className="enter_text">
              <h1>Hello, I'm Gökay</h1>
              <h2>I develop highly responsible, modern websites</h2>
            </div>
            <div className="foto_area">
              <img className="foto" src={me} alt="Gökay Gültekin" />
            </div>
          </div>
        </div>
      </header>

      <h2 id="about" className="part_header">
        About me
      </h2>
      <p>
        I studied Japanese Language and Literature in Ankara University along
        with Health Information Systems in Başkent University. I can speak
        English, Japanese and Turkish.
      </p>

      <h2 id="projects" className="part_header">
        Projects
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
          name="Mekan Keman"
          about="Violin teacher website"
          tags={["react", "bootstrap"]}
        />
      </div>

      <h2 className="part_header">Contact</h2>
      <p>
        I am <b>looking</b> for a job. Preferably in Wien, Austria.
      </p>

      <footer>All rights reserved. 2022. Gökay Gültekin.</footer>
    </div>
  );
}

export default App;
