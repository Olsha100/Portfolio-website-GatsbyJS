import React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/404.module.scss"

const NoPage = () => {
  return (
    <section className={styles.container}>
      <h1>404</h1>
      <p className={styles.container__icon}>&#9785;</p>
      <p>Page you are trying to find doesn't exist.</p>
      <p>
        <Link to="/">
          Click <strong>here </strong>
        </Link>
        to go back to the home page.
      </p>
    </section>
  )
}

export default NoPage
