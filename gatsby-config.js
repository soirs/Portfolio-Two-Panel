/* eslint-disable global-require */
/* eslint-disable no-undef */
require('dotenv').config();
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Frank Richard Semakula | Portfolio',
    siteUrl: 'https://frankrs.dk/',
    description:
      'Frontend developer with a wide range of skills within web development and business.',
    keywords:
      'frontend developer, junior developer, portfolio, personal website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Frank Richard Semakula',
        short_name: 'FRS - Portfolio',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'portrait',
        icon: 'src/assets/favicons/favicon.png',
        include_favicon: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        // downloadLocal: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-124489759-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // -v- Setting this parameter is optional
        anonymize: true,
        // -v- Setting this parameter is also optional
        respectDNT: true,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-offline',
    //   options: {
    //     globPatterns: ['**/*.{js,jsx,jpg,svg,html,css}'],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.resolve(__dirname, 'src/assets/svg'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
  ],
};
