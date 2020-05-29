# Demo

<https://frankrs-portfolio-minimal.netlify.com/>
[![Netlify Status](https://api.netlify.com/api/v1/badges/35fa3ddf-8488-42b5-94cb-8a2e771f2a76/deploy-status)](https://app.netlify.com/sites/frankrs-portfolio-minimal/deploys)

##### Todo

Purge comments
Fix Prettier

# How to use

### Install

```
git clone https://github.com/soirs/Portfolio-Two-Panel.git
yarn install
```

### Setup Contentful

1. [Sign up](https://www.contentful.com/sign-up/) for Contentful and create a new empty space

2. `yarn run setup`

3. Enter in the requested info for your Contentful space found here: **app.contentful.com** → **Space Settings** → **API keys**. You will need to provide both a standard API key (first tab) and a management key (second tab).

4. Add this to an .env file in root of project

 >CONTENTFUL_PERSON_ID=xxxxx
CONTENTFUL_SPACE_ID=xxxx
CONTENTFUL_ACCESS_TOKEN=xxxx
