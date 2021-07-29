import profileImage from '../assets/images/franksemakula.png';

const typekit = 'https://use.typekit.net/qcn8ytc.css';
const title = 'Portfolio';
const description = 'Frontend developer with a wide range of skills within web development.';
const keywords = 'frontend developer, junior developer, portfolio, personal website';
const siteUrl = 'https://frankrs.dk/';

const Helmet = {
  title,
  titleTemplate: '%s | Frank Richard Semakula - Frontend Developer',
  htmlAttributes: { lang: 'en' },
  meta: [
    { name: 'description', content: description },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, user-scalable=no',
    },
    { name: 'keywords', content: keywords },
    { property: 'og:url', content: siteUrl },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'msapplication-navbutton-color', content: '#000' },
    { name: 'msapplication-TileColor', content: '#000' },
    { name: 'theme-color', content: '#000' },

    { property: 'og:title', content: title },
    { property: 'og:image', content: profileImage },
    { property: 'og:image:width', content: '880px' },
    { property: 'og:image:height', content: '440px' },
    { property: 'og:image:alt', content: description },

    { name: 'twitter:title', content: title },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: profileImage },
    { name: 'twitter:site', content: '@happyhoima' },
    { name: 'twitter:creator', content: '@happyhoima' },
    { name: 'twitter:description', content: description },
  ],
  link: [{ rel: 'stylesheet', href: typekit }],
};

export default Helmet;
