/* eslint-disable no-undef */
import * as contentful from 'contentful';

contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default contentful;
