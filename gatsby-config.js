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
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/logo512.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
  ],
};
