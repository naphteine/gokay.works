import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Project from "../components/Project"
import me from "../../public/profile.jpg"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Gökay Gültekin</title>
        <meta name="description" content="Personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.app_header}>
        <nav className={styles.header}>
          <ul>
            <li>
              <a href="https://blog.gokaygultekin.dev">Blog</a>
            </li>
            <li>
              <a href="#about" className={`${styles.btn} ${styles["btn-primary"]}`}>
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
        <div className={styles.headbeat}>
          <div className={`${styles.enterance} ${styles.area}`}>
            <div className={styles.enter_text}>
              <h1>Hello, I&apos;m<br />Gökay Gültekin</h1>
              <h2>I develop highly responsible, modern websites</h2>
              <a href="#contact" className={styles.button}>Hire now</a>
            </div>
            <div className={styles.foto_area}>
              <Image alt="Gökay Gültekin" className={styles.foto} placeholder="blur" src={me} />
            </div>
          </div>
        </div>
      </header >

      <main className={styles.App}>
        <section id="about" className={styles.area}>
          <h2 className={styles.part_header}>
            <div className={styles.centeredThing}>
              <span className={styles.lineInside}>
                About
              </span>
            </div>
          </h2>
          <p className={styles.introText}>
            I studied Japanese Language and Literature in Ankara University along
            with Health Information Systems in Başkent University. I can speak
            English, Japanese and Turkish.
          </p>

          <p className={styles.introText}>
            I mainly use React, Next.js, TypeScript and Golang. I can use Git, GitHub, Terminal and Linux/BSD systems with ease. I also have knowledge on basics, such as HTML5, CSS (SCSS), Bootstrap.
          </p>
        </section>

        <section id="projects" className={styles.area}>
          <h2 className={styles.part_header}>
            <div className={styles.centeredThing}>
              <span className={styles.lineInside}>
                Projects
              </span>
            </div>
          </h2>
          <div className={styles.project_list}>
            <Project
              name="Nitoji"
              about="Japanese-Turkish Dictionary"
              tags={["react", "golang", "typescript"]}
              link="https://nitoji.duga1.com"
            />
            <Project
              name="UsagiSözlük"
              about="Beauty products social media"
              tags={["react", "golang", "typescript"]}
            />
            <Project
              name="Misfits Cosplay"
              about="Cosplay team website"
              tags={["next"]}
              link="https://misfitscos.vercel.app"
            />
            <Project
              name="Cryptbaba"
              about="Cryptocurrency experiment game"
              tags={["react", "bootstrap"]}
            />
          </div>
        </section>

        <section id="contact" className={styles.area}>
          <h2 className={styles.part_header}>
            <div className={styles.centeredThing}>
              <span className={styles.lineInside}>
                Contact
              </span>
            </div>
          </h2>
          <p>
            I am <b>looking</b> for a job. Preferably in Vienna, Austria.
          </p>

          <a href="mailto:ggltekn@gmail.com"><div className={styles.emailButton}>Send me an e-Mail</div></a>

          <div className={styles.links}>
            <a href="mailto:ggltekn@gmail.com">Mail</a>
            <a href="https://www.linkedin.com/in/gokaygultekin">Linkedin</a>
            <a href="https://www.github.com/gguilt">Github</a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>All rights reserved. 2022. Gökay Gültekin.</footer>
    </>
  )
}