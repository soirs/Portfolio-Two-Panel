import * as contentful from 'contentful';
// import 'firebase/analytics';
// import 'firebase/auth';
// import 'firebase/firestore';
// import 'firebase/performance';
// import 'firebase/storage';


contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACAE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,

});

export default contentful;
