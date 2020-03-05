/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: '/client',
  proxy: {
    prefix: "/api",
    url: "http://localhost:5000"
  },
  plugins: [`gatsby-plugin-sass`],
}
