/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `code-sandbox`,
        path: `${__dirname}/src/projects/code-sandbox/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/code-sandbox-images/`,
      },
    },
  ],

  siteMetadata: {
    title: "Bartosz Olszewski",
    description: "Frontend developer",
    copyright: "Copyright 2021 © Bartosz Olszewski",
  },
}
