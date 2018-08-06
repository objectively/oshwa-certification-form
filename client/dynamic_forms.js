const DynamicForm = {
  generateUrlField(count) {
    return `
    <div data-template-value='url-inputs' class="form-field-wrapper row">
      <div class="row">
        <i class="js-remove-field material-icons">remove_circle</i>
        <div class="columns small-11 medium-5 large-5 ">
        <label for="citations[${count}]">Citation Name</label>
        <input type="text" class="url_create url_title" name="citations[${count}]" placeholder="title" />
        </div>
        <div class="columns small-11 small-offset-1 medium-5 large-5">
        <label for="citations[${count}]">Citation URL</label>
        <input type="text" class="url_create url_address" name="citations[${count}]" placeholder="url" />
        </div>
        <div class="columns small-offset-1 small-11 citation-error"></div>
      </div>
    </div>
  `;
  },

  addFormField() {
    $('.js-add-url-inputs-field').on('click', e => {
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
