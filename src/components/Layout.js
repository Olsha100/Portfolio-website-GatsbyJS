import { Link } from "gatsby"
import React from "react"
import "../styles/global.scss"
import * as styles from "../styles/layout.module.scss"

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header>
        <nav className={styles.navbar}>
          <ul>
            <li id="HOME">
              <Link to="/">HOME</Link>
            </li>
            <li id="ABOUT ME">
              <Link to="/about">ABOUT ME</Link>
            </li>
            <li id="CODE SANDBOX">
              <Link to="/sandbox">CODE SANDBOX</Link>
            </li>
            {/* <li id="COMMERCIAL PROJECTS">
              <Link to="/projects">COMMERCIAL PROJECTS</Link>
            </li> */}

          </ul>
        </nav>
      </header>
      <main className="content">{children}</main>
      <footer className={styles.footer}>
        <p>Copyright 2021 © Bartosz Olszewski</p>
      </footer>
    </div>
  )
}
