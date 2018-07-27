let fs = require('fs');
let path = require('path');
let templateHTML = fs.readFileSync(path.join(__dirname, 'dynamic_forms.test.html')).toString();
let { JSDOM } = require('jsdom');
let { window } = new JSDOM(templateHTML);
let { document } = window;
let assert = require('chai').assert;

// let DynamicForms = require('../../../client/dynamic_forms.js');
describe('DynamicForms', function() {
  const body = document.body;

  beforeEach(function() {
    global.$ = require('jquery')(window);
    body.innerHTML = templateHTML;
    // DynamicForms.init();
  });
  afterEach(function() {
    body.innerHTML = '';
  });
  xit('should add a url create form field', function() {});
  xit('should delete a url create form field', function() {});
  xit('should add a url create form field even if all url fields were deleted', function() {});
  xit('should show a field conditionally on dropdown select', function() {});
});
