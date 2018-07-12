const Utils = {
  markdownLinksNewPage: () => {
    $('.markdown a').map((idx, link) => link.setAttribute('target', '_blank'));
  }
};

module.exports = Utils;
