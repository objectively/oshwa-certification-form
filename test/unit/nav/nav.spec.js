const fs = require('fs');
const path = require('path');

const { JSDOM } = require('jsdom');

const templateHTML = fs.readFileSync(path.join(__dirname, 'nav.test.html')).toString();
const { window } = new JSDOM(templateHTML);

const { document } = window;
const { assert } = require('chai');

const Nav = require('../../../client/nav.js');

global.$ = require('jquery')(window);

describe('Nav', () => {
  const { body } = document;
  let closeButton;
  let jsTargetMenu;
  let nav;
  let navButton;
  let overlay;
  let topBarButton;

  beforeEach(() => {
    body.innerHTML = templateHTML;
    Nav.init();
    closeButton = document.querySelector('.close-menu');
    nav = document.querySelector('nav');
    navButton = document.querySelector('.js-trigger-menu');
    jsTargetMenu = document.querySelector('.js-target-menu');
    overlay = document.querySelector('#overlay');
    topBarButton = document.querySelector('.top-bar__button');

    navButton.click();
  });
  afterEach(() => {
    body.innerHTML = '';
  });
  it('should make Nav menu active', () => {
    assert.equal(nav.classList.contains('active-menu'), true);
    assert.equal(jsTargetMenu.classList.contains('active-menu-button'), false);
  });
  it('should make Overlay active', () => {
    assert.equal(overlay.classList.contains('js-active'), true);
  });
  it('should close on closeButton click', () => {
    closeButton.click();
    assert.equal(jsTargetMenu.classList.contains('active-menu'), false);
    assert.equal(topBarButton.classList.contains('active-menu-button'), false);
    assert.equal(overlay.classList.contains('js-active'), false);
  });
  it('should close on overlay click', () => {
    navButton.click();
    overlay.click();
    assert.equal(jsTargetMenu.classList.contains('active-menu'), false);
    assert.equal(topBarButton.classList.contains('active-menu-button'), false);
    assert.equal(overlay.classList.contains('js-active'), false);
  });
});
