/* eslint-disable no-undef */
import * as contentful from 'contentful';

contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACAE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export default contentful;
