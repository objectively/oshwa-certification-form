const dotenv = require('dotenv');

dotenv.config();

const request = require('supertest');

const app = require('../../../app');

describe('Router', () => {
  it('renders the homepage', done => {
    request(app)
      .get('/')
      .auth(process.env.AUTH_USERNAME, process.env.AUTH_PASSWORD)
      .expect(200, done);
  });
  it('renders the apply page', done => {
    request(app)
      .get('/apply')
      .auth(process.env.AUTH_USERNAME, process.env.AUTH_PASSWORD)
      .expect(200, done);
  });
  it('renders the confirmation page', done => {
    request(app)
      .get('/confirmation')
      .auth(process.env.AUTH_USERNAME, process.env.AUTH_PASSWORD)
      .expect(200, done);
  });
});
