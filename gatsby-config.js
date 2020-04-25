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
  ],
};
