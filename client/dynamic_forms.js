const DynamicForm = {
  defaults: {
    urlInputTemplate: document.querySelector('[data-template-value="url-inputs"]')
      ? document.querySelector('[data-template-value="url-inputs"]').outerHTML
      : ''
  },
  returnFormField(template) {
    switch (template) {
      case 'url-inputs':
        return DynamicForm.defaults.urlInputTemplate;
      default:
        return '';
    }
  },
  addFormField() {
    $('.js-add-url-inputs-field').on('click', e => {
      e.preventDefault();

      const newFormField = DynamicForm.returnFormField('url-inputs');
      document.getElementsByClassName('js-add-url-inputs-field')[0].insertAdjacentHTML('beforebegin', newFormField);
    });
  },
  deleteFormField() {
    $('body').on('click', '.js-remove-field', e => {
      e.preventDefault();
      $(e.currentTarget)
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
  init() {
    this.addFormField();
    this.deleteFormField();
    this.renderExplanationFields();
  }
};

module.exports = DynamicForm;
