import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "../styles/global.scss"
import * as styles from "../styles/home.module.scss"

export default function Home() {
  return (
    <div className={styles.container}>
      <StaticImage
        src="../images/laptop.png"
        alt="A laptop"
        placeholder="blurred"
        width={470}
      />
      <section className={styles.box}>
        <StaticImage
          src="../images/react-icon.png"
          alt="React library icon"
          placeholder="blurred"
          layout="fixed"
        />
        <header>
          <h1>BARTOSZ OLSZEWSKI</h1>
          <h2 className={styles.box__header}>Frontend developer</h2>
        </header>
        <nav>
          <ul className={styles.list}>
            <li className={styles.list__item}>
              <Link to="/about">&rarr; ABOUT ME</Link>
            </li>
            <li className={styles.list__item}>
              <Link to="/sandbox">&rarr; CODE SANDBOX</Link>
            </li>
            {/* <li className={styles.list__item}>
              <Link to="/projects">&rarr; COMMERCIAL PROJECTS</Link>
            </li> */}
          </ul>
        </nav>
      </section>
    </div>
  )
}
