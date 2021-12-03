import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/sandbox.module.scss"
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"

const CodeSandbox = ({ data }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout>
      <section>
        <header>
          <h1>Code sandbox</h1>
          <p>
            Coding is both my desired career path and my passion. I love writing
            web apps for fun so feel free to check a few of my projects.
          </p>
        </header>
        <article className={styles.projectGrid}>
          {projects.map(project => (
            <div key={project.node.id}>
              <h2>{project.node.frontmatter.title}</h2>
              <div className={styles.projectGrid__imageContainer}>
                <GatsbyImage
                  image={getImage(project.node.frontmatter.featuredImage)}
                  alt={project.node.frontmatter.imgAlt}
                />
                <div className={styles.projectGrid__imageLayer}>
                  <a
                    href={project.node.frontmatter.githubRepoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StaticImage src="../images/GitHub-logo.png" />
                  </a>
                  {project.node.frontmatter.projectUrl && (
                    <a
                      href={project.node.frontmatter.projectUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <StaticImage src="../images/www-logo.png" />
                    </a>
                  )}
                </div>
              </div>
              <h3>{project.node.frontmatter.stack}</h3>
            </div>
          ))}
        </article>
      </section>
    </Layout>
  )
}

export default CodeSandbox

export const query = graphql`
  query CodeSandbox {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  blurredOptions: { width: 100 }
                  placeholder: BLURRED
                  transformOptions: { cropFocus: CENTER }
                  aspectRatio: 1
                )
              }
            }
            title
            githubRepoUrl
            imgAlt
            projectUrl
            stack
          }
          id
        }
      }
    }
  }
`