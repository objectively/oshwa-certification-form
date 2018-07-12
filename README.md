## Objectively Express Boilerplate

### Getting Started

```bash
# clone the repo

# move into the directory

# Install dependencies
npm install

# Run the app
npm start

## Server will run on port 3000
```

### Development

To develop the app, run `npm run dev`. You can access automatic server and client reloading at localhost:7000, which is
proxying localhost:3000.

This dev task uses [nodemon](https://github.com/remy/nodemon) to monitor changes on the server, and
[browser-sync](https://www.npmjs.com/package/browser-sync) to monitor changes to the client.

The views engine is [Handlebars](https://github.com/ericf/express-handlebars).

[node-sass-middleware](https://github.com/sass/node-sass-middleware) compiles all the stylesheets in the sass folder to
public/stylesheets

[Browserify](https://github.com/browserify/browserify) allows us to use `require` in our client-side javascript and
bundles everything into a single bundle.js file. It is linked in the layout: `<script
src='/javascripts/bundle.js'></script>`. Add modules to the **client** folder and require them in **script.js**.

### Testing

#### Unit tests

Test use [Mocha](https://mochajs.org/) as the test framework and [Chai](http://www.chaijs.com/) as the assertions
library. [JSDOM](https://github.com/jsdom/jsdom) sets up a browser environment for our tests. All tests are can be found
in the **spec** folder. Run tests with `npm test`.

#### ESLint and Prettier

Run `npm run lint` to lint javascript with [ESLint](https://eslint.org/). Run `npm run prettier` to auto format client
side javascript.

### Environment Variables

[Dotenv](https://www.npmjs.com/package/dotenv) will load environment variables from a .env file into process.env.

### Deployment

#### Heroku

```bash
# create a heroku repo (this will create your heroku repo and add your remore)
heroku create

# Set the NODE_ENV to 'production
heroku config:set NODE_ENV='production'

# Push your app to heroku
git push heroku master

# Open your deployed app
heroku open
```
