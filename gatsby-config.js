module.exports = {
  siteMetadata: {
    title: "tombo gokuraku portfolio",
    description: "tombo gokuraku Web Engineer",
    author: "tombo gokuraku",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-eslint-v2",
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tombo gokuraku portfolio`,
        short_name: `Tombo`,
        start_url: `/`,
        background_color: `#263238`,
        theme_color: `#4FC3F7`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/TomboHeroImage.svg`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-subfont`,
      options: {
        silent: true,
        fallback: false,
        inlineFonts: true,
        inlineCss: true,
      },
    },
    "gatsby-plugin-webpack-bundle-analyser-v2",
  ],
};
