import Image from "next/image";
import me from "../../public/profile.jpg";

export default function Home() {
  return (
    <main>
      <header className="app_header">
        <nav className="header">
          <ul>
            <li>
              <a href="https://blog.gokay.works">Blog</a>
            </li>
            <li>
              <a href="#about">About</a>
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
              <h1>
                Hello, I&apos;m
                <br />
                Gökay Gültekin
              </h1>
              <h2>I develop highly responsible, modern websites</h2>
              <a href="#contact" className="button">
                Hire now
              </a>
            </div>
            <div className="foto_area">
              <Image
                alt="Gökay Gültekin"
                className="foto"
                placeholder="blur"
                src={me}
              />
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}

/*
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Project from "../components/Project";
import { RiMailLine, RiLinkedinFill, RiGithubFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gökay Gültekin</title>
        <meta name="description" content="Personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.App}>
        <section id="about" className={styles.area}>
          <h2 className={styles.part_header}>
            <div className={styles.centeredThing}>
              <span className={styles.lineInside}>About</span>
            </div>
          </h2>
          <p className={styles.introText}>
            I studied Japanese Language and Literature in Ankara University
            along with Health Information Systems in Başkent University. I can
            speak English, Japanese and Turkish.
          </p>

          <p className={styles.introText}>
            I mainly use React, Next.js, TypeScript and Golang. I can use Git,
            GitHub, Terminal and Linux/BSD systems with ease. I also have
            knowledge on basics, such as HTML5, CSS (SCSS), Bootstrap.
          </p>
        </section>

        <section id="projects" className={styles.area}>
          <h2 className={styles.part_header}>
            <div className={styles.centeredThing}>
              <span className={styles.lineInside}>Projects</span>
            </div>
          </h2>
          <div className={styles.project_list}>
            <Project
              name="Nitoji"
              about="Japanese-Turkish Dictionary"
              tags={["next.js", "react", "typescript", "pocketbase"]}
              link="https://nitoji.gokay.works"
            />
            <Project
              name="Cryptbaba"
              about="Cryptocurrency buy/sell game"
              tags={["next.js", "react"]}
              link="https://cryptbaba.gokay.works"
            />
            <Project
              name="Misfits Cosplay"
              about="Cosplay team website"
              tags={["next.js", "react"]}
              link="https://misfits.gokay.works"
            />
          </div>
        </section>

        <section id="contact" className={styles.area}>
          <h2 className={styles.part_header}>
            <div className={styles.centeredThing}>
              <span className={styles.lineInside}>Contact</span>
            </div>
          </h2>
          <p>
            I am <b>looking</b> for a job. Preferably in Austria.
          </p>

          <a href="mailto:ggltekn@gmail.com">
            <div className={styles.emailButton}>Send me an e-Mail</div>
          </a>

          <div className={styles.links}>
            <a href="mailto:ggltekn@gmail.com">
              <RiMailLine size={28} />
            </a>
            <a href="https://www.linkedin.com/in/gokaygultekin">
              <RiLinkedinFill size={28} />
            </a>
            <a href="https://www.github.com/naphteine">
              <RiGithubFill size={28} />
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        All rights reserved (c) 2022-2024. Gökay Gültekin.
      </footer>
    </>
  );
}

*/
