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
              tags={["next", "react", "typescript", "supabase"]}
              link="https://nitoji.duga1.com"
            />
            <Project
              name="Misfits Cosplay"
              about="Cosplay team website"
              tags={["next", "react"]}
              link="https://misfits.duga1.com"
            />
            {/*
            <Project
              name="UsagiSözlük"
              about="Beauty products social media"
              tags={["next", "react", "typescript", "supabase"]}
              link="https://usagi.duga1.com"
            />
            <Project
              name="pati"
              about="Paticafe fictional shop website"
              tags={["react", "bootstrap"]}
              link="https://pati.duga1.com"
            />
            <Project
              name="Cryptbaba"
              about="Cryptocurrency experiment game"
              tags={["next", "react"]}
              link="https://cryptbaba.duga1.com"
              source="https://github.com/gguilt/cryptbaba"
            />
            <Project
              name="yakuza"
              about="Idle Yakuza management game"
              tags={["next", "react"]}
              link="https://yakuza.duga1.com"
              source="https://github.com/gguilt/yakuza"
            />
            <Project
              name="DUGA-1"
              about="Fictional hosting SaaS company website"
              tags={["next", "react"]}
              link="https://www.duga1.com"
              source="https://github.com/gguilt/duga-1"
            />
            <Project
              name="kantan"
              about="To-do and calendar app"
              tags={["next", "react"]}
              link="https://kantan-gguilt.vercel.app"
              source="https://github.com/gguilt/kantan"
            />
            <Project
              name="kusuri"
              about="Medicine tracker app"
              tags={["next", "react"]}
              link="https://kusuri.duga1.com"
              source="https://github.com/gguilt/kusuri"
            />
            */}
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
            I am <b>looking</b> for a job. Preferably in Austria.
          </p>

          <a href="mailto:ggltekn@gmail.com"><div className={styles.emailButton}>Send me an e-Mail</div></a>

          <div className={styles.links}>
            <a href="mailto:ggltekn@gmail.com">Mail</a>
            <a href="https://www.linkedin.com/in/gokaygultekin">Linkedin</a>
            <a href="https://www.github.com/gguilt">Github</a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>All rights reserved (c) 2022-2023. Gökay Gültekin.</footer>
    </>
  )
}