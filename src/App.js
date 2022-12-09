import './App.css';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <header className="navbar fixed-top">
        <a href="https://blog.gguilt.com">Blog</a>
      </header>

      <div className='enterance'>
        <h1>Hallo, ich bin Gökay</h1>
      </div>

      <h2>About me</h2>
      <p>I studied Japanese Language and Literature in Ankara University along with Health Information Systems in Başkent University. I can speak English, Japanese and Turkish.</p>

      <h2>Works</h2>
      <Project name="Nitoji" about="Japanese-Turkish Dictionary" tags={[{ name: "react" }, { name: "golang" }]} />
      <Project name="UsagiSözlük" about="Beauty products social media" tags={[{ name: "react" }, { name: "golang" }]} />
      <Project name="Misfits Cosplay" about="Cosplay team website" tags={[{ name: "react" }, { name: "golang" }]} />
      <Project name="Mekan Keman" about="Violin teacher website" tags={[{ name: "react" }, { name: "golang" }]} />

      <h2>Contact</h2>
      <p>I am <b>looking</b> for a job. Preferably in Austria.</p>

      <footer>
        All rights reserved. 2022. Gökay Gültekin.
      </footer>
    </div>
  );
}

export default App;
