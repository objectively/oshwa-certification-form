const express = require('express');
const auth = require('../auth');

const router = express.Router();

const { validateProjectFields } = require('../controllers/project_validations');

const {
  getApplyPage,
  getConfirmationPage,
  getLandingPage,
  postApplyPage
} = require('../controllers/project_controller');

/* GET home page. */

router.get('/', auth, getLandingPage);

/* GET /apply. */
router.get('/apply', auth, getApplyPage);

/* POST /apply. */
router.post('/apply', auth, validateProjectFields, postApplyPage);

/* GET /confirmation. */
router.get('/confirmation', auth, getConfirmationPage);

module.exports = router;
