/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: 'https://peteson.me'
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Peter Son's Portfolio`,
        short_name: `PS Portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#224C6F`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato\:300,300i,400,400i,700,700i`,
          `Karla\:300,300i,400,400i,700,700i`
        ],
        display: 'swap'
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://peteson.me',
        sitemap: 'https://peteson.me/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://peteson.me`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
          trackingId: process.env.YOUR_GOOGLE_ANALYTICS_TRACKING_ID,
          head: true,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        schemas: {
          article: require('./src/schemas/article.json'),
          work: require('./src/schemas/work.json'),
        },
      },
    },
  ], 
}
