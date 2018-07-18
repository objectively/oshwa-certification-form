const express = require('express');

const router = express.Router();

const siteMetadata = require('../config/siteMetadata');

const { title, description, keywords, index, apply } = siteMetadata;
// const { index } = siteMetadata;
// const { apply } = siteMetadata;

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { ...index });
});

/* GET /apply. */
router.get('/apply', (req, res, next) => {
  res.render('apply', { ...apply });
});
module.exports = router;
