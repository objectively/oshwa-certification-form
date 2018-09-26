const dotenv = require('dotenv');
const express = require('express');
const exphbs = require('express-handlebars');
const babelify = require('babelify');
const sassMiddleware = require('node-sass-middleware');
const browserify = require('browserify-middleware');
const helmet = require('helmet');
const compression = require('compression');
const minify = require('express-minify');
const minifyHTML = require('express-minify-html');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const browserSync = require('browser-sync');
const connectBrowserSync = require('connect-browser-sync');

dotenv.config();

const index = require('./routes/index');

const app = express();

const port = process.env.PORT || 3000;

// view engine setup
app.engine('hbs', exphbs({ extname: '.hbs', defaultLayout: 'layout' }));
app.set('view engine', 'hbs');

// Use sass
app.use(
  sassMiddleware({
    src: path.join(__dirname, '/sass'),
    dest: path.join(__dirname, '/public'),
    debug: true
  })
);

// browserify and babelify
browserify.settings({
  transform: [[babelify, { presets: ['@babel/preset-env'] }]]
});

app.get('/javascripts/bundle.js', browserify('./client/script.js'));

// security
app.use(helmet());

// //performance
app.use(compression());
app.use(minify());
app.use(
  minifyHTML({
    override: true,
    exception_url: false,
    htmlMinifier: {
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeEmptyAttributes: true,
      minifyJS: true
    }
  })
);

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// automatic reloading with browserSync
const bsConfig = {
  proxy: `localhost:${port}`,
  open: false,
  files: ['public/**/*.{js,css}', 'client/*.js', 'sass/**/*.scss', 'views/**/*.hbs'],
  port: 7000
};

if (app.get('env') === 'development') {
  const bs = browserSync.create().init(bsConfig);
  app.use(connectBrowserSync(bs));
}

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
