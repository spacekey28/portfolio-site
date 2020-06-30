/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: 'https://peteson.me'
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`300`, `300i`, `400`, `400i`, `700`, `700i`]
          },
          {
            family: `Karla`,
            variants: [`300`, `300i`, `400`, `400i`, `700`, `700i`]
          },
        ],
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
          trackingId: process.env.YOUR_GOOGLE_ANALYTICS_TRACKING_ID,
          head: true,
      },
    },
  ], 
}
