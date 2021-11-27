import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/sandbox.module.scss"

const CodeSandbox = () => {
  return (
    <Layout>
      <section>
        <header className={styles.articleHeader}>
          <h1>Code sandbox</h1>
          <p>
            Coding is both my desired career path and my passion. I love writing
            web apps for fun so feel free to check a few of my projects.
          </p>
        </header>
        <article>Projects go here</article>
      </section>
    </Layout>
  )
}

export default CodeSandbox
