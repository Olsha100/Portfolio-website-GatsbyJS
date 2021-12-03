import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"

import * as styles from "../styles/about.module.scss"

const AboutMe = () => {
  return (
    <Layout>
      <section className={styles.container}>
        <header id={styles.headerMain}>
          <h1>About me</h1>
        </header>
        <StaticImage
          src="../images/photo.png"
          alt="author's photo"
          placeholder="blurred"
          width={300}
          style={{ gridArea: "image", justifySelf: "center" }}
        />
        <article id={styles.articleAbout}>
          <header>
            <h2>Hi, I am Bartosz! </h2>
          </header>
          <p>
            In the summer of 2020, I decided to become a frontend developer.
            Since then, I have been learning skills and writing web applications. <br />I chose React as my main technology and the page
            you can see here was written with <strong>GatsbyJS</strong>.
          </p>
        </article>
        <article id={styles.articleTechnologies}>
          <header>
            <h2>Technology stack</h2>
            <ul>
              <li>HTML</li>
              <li>Javascript</li>
              <li>SCSS</li>
              <li>React</li>
              <li>Redux</li>
              <li>ContextAPI</li>
              <li>Gatsby</li>
              <li>SQL</li>
              <li>Git / Github</li>
              <li>Figma</li>
              <li>Jira</li>
              <li>BEM</li>
            </ul>
          </header>
        </article>
        <article id={styles.articleExperience}>
          <header id={styles.articleExperienceHeader}>
            <h2>IT experience</h2>
            <p id={styles.articleExperienceParagraph}>
              I worked in business department where I was a link between
              business and technology. I daily cooperated with IT team and
              software companies in numerous developments and software
              improvements. My responsibilities can by divided into following
              areas:
            </p>
          </header>
          <article id={styles.articleExperienceArticleTech}>
            <header>
              <h3>Tech</h3>
              <ul>
                <li>Managing technical integrations via APIs</li>
                <li>
                  Coordinating projects developing new features in systems'
                  cores
                </li>
                <li>Designing and proceeding manual tests</li>
                <li>Improving UX in e-commerce platform</li>
              </ul>
            </header>
          </article>
          <article id={styles.articleExperienceArticleAnalytics}>
            <header>
              <h3>Analytics</h3>
              <ul>
                <li>Data analysis using SQL</li>
                <li>Data analysis using GA</li>
                <li>Advanced Excel analysis with VBA</li>
                <li>
                  Preparing numerous reports for financial and business
                  analytics
                </li>
              </ul>
            </header>
          </article>
          <article id={styles.articleExperienceArticleBusiness}>
            <header>
              <h3>Business</h3>
              <ul>
                <li>Developing daily relations with business partners</li>
                <li>Managing financial settlments with business partners</li>
                <li>Business contracts' negotiation</li>
                <li>
                  Cost optimisation and finding new ways to make profits from
                  partnerships
                </li>
              </ul>
            </header>
          </article>
        </article>
      </section>
    </Layout>
  )
}

export default AboutMe
