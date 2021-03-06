/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    siteUrl: "https://missionmechanicalservices.com"
  },
  proxy: {
    prefix: "/api",
    url: "http://localhost:5000"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-remove-trailing-slashes'
  ],
}
