const DynamicForm = {
  generateUrlField(count) {
    return `
        <div data-template-value="url-inputs" class="form-field-wrapper row">
          <div class="columns small-1"><button class="js-remove-field"></button></div>
          <div class="columns small-11 large-5 medium-5">
            <label for="citations[${count}]--url_title">Citation Title</label>
            <input
              id="citations[${count}]--url_title"
              type="text"
              class="url_create url_title"
              name="citations[${count}]"
              placeholder="Enter citation title"
            />
          </div>
          <div class="columns small-offset-1 small-11 large-5 medium-5">
            <label for="citations[${count}]--url_address">Citation URL</label>
            <input
              id="citations[${count}]--url_address"
              type="text"
              class="url_create url_address"
              name="citations[${count}]"
              placeholder="Enter a URL including the protocol (e.g https://example.com)"
            />
            <div class="instructions">Include the protocol to your URL (e.g. http:// or https://)</div>
          </div>
        <div class="columns large-offset-1 citation-error"></div>
      </div>
    `;
  },
  addFormField() {
    $('.js-add-url-inputs-field > .js-add-url').on('click', e => {
      const count = $('.form-field-wrapper ').length;
      e.preventDefault();
      const newFormField = DynamicForm.generateUrlField(count + 1);
      document.getElementsByClassName('js-add-url-inputs-field')[0].insertAdjacentHTML('beforebegin', newFormField);
    });
  },
  deleteFormField() {
    $('body').on('click', '.js-remove-field', e => {
      e.preventDefault();
      $(e.currentTarget)
        .parent()
        .parent()
        .remove();
    });
  },
  renderExplanationFields() {
    $('.explanation-select > .select > select').on('change', e => {
      const explanationTarget = e.currentTarget.getAttribute('data-target');
      const explanationField = document.querySelector(`[data-value="${explanationTarget}"]`);
      if (e.target.value === 'true') {
        explanationField.classList.add('hide');
      } else {
        explanationField.classList.remove('hide');
      }
    });
  },
  openExample() {
    $('.open-example-control').on('click', e => {
      e.preventDefault();
      const examplesTarget = $(e.currentTarget).attr('data-target');
      const examplesContainer = $(`[data-modal-value="${examplesTarget}"]`);
      if ($(e.currentTarget).hasClass('open')) {
        $(e.currentTarget).removeClass('open');
        examplesContainer.addClass('hide');
      } else {
        $(e.currentTarget).addClass('open');
        examplesContainer.removeClass('hide');
      }
    });
  },
  init() {
    this.addFormField();
    this.deleteFormField();
    this.renderExplanationFields();
    this.openExample();
  }
};

module.exports = DynamicForm;
