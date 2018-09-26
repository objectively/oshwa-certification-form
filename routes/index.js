const express = require('express');

const router = express.Router();

const { validateProjectFields } = require('../controllers/project_validations');

const {
  getApplyPage,
  getConfirmationPage,
  getLandingPage,
  postApplyPage
} = require('../controllers/project_controller');

/* GET home page. */

router.get('/', getLandingPage);

/* GET /apply. */
router.get('/apply', getApplyPage);

/* POST /apply. */
router.post('/apply', validateProjectFields, postApplyPage);

/* GET /confirmation. */
router.get('/confirmation', getConfirmationPage);

module.exports = router;
