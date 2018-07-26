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
  init() {
    this.addFormField();
    this.deleteFormField();
  }
};

module.exports = DynamicForm;
