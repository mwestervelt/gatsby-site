const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: 'Christian Kane for Pinellas County Commissioner',
    description: `Offical campaign website of Democrat Christian Kane Lanier`,
    author: `kane4pinellas`,
    siteUrl: `https://gatsby-html5up-spectral.appseed.us`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://kane4pinellas.us4.list-manage.com/subscribe/post?u=2f569f446f10463198a17bbca&amp;id=44ee74dcc4', //mailchimp endpoint
      },
    },
  ],
};
