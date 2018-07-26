const createBooleanDropdown = field => `
  <div class="select">
    <select id="${field.contentfulFieldName}" type="text" name="${field.contentfulFieldName}">
      <option value="true">Yes</option>
      <option value="false">No</option>
    </select>
  </div>
`;

const createCheckbox = field => `
  <div>
    <input
      type="checkbox"
      id="${field.contentfulFieldName}"
      name="${field.contentfulFieldName}"
      value="true"
    />
    <label for="${field.contentfulFieldName}">${field.contentfulFieldName}</label>
  </div>
`;

const createCheckboxes = (field, options) => {
  let allCheckboxes = '';
  options.forEach(option => {
    allCheckboxes += `
      <div class="checkbox">
        <input
          type="checkbox" id="${option}" name="${field.contentfulFieldName}" value="${option}"/>
        <label for="${option}">${option}</label>
      </div>
    `;
  });
  return `
  <fieldset>
    <legend>${field.formPlaceholder}</legend>
    ${allCheckboxes}
  </fieldset>
`;
};

const createDropdownSelect = (field, options) => {
  let allOptions = '';
  options.forEach(option => {
    allOptions += `
    <option value="${option}">${option}</option>
    `;
  });

  return `
    <div class="select">
      <select id="${field.contentfulFieldName}" type="text" name="${field.contentfulFieldName}">
        <option value="" disabled selected>${field.formPlaceholder}</option>
        ${allOptions}
      </select>
    </div>
  `;
};

const createPreviousVersionsDropdown = (field, optionsObj) => {
  let allOptions = '';
  optionsObj.forEach(option => {
    allOptions += `
    <option value="${option.sys.id}">${option.fields.oshwaUid}: ${option.fields.responsibleParty} - ${
      option.fields.projectName
    } </option>
    `;
  });

  return `
    <div class="select select-previous-versions" >
      <select  multiple="multiple" class="${field.contentfulFieldName}" type="text" name="${field.contentfulFieldName}">
        <option></option>
        ${allOptions}
      </select>
    </div>
  `;
};

const createInput = field => `
  <input type="text"
    id="${field.contentfulFieldName}"
    name="${field.contentfulFieldName}"
    placeholder="${field.formPlaceholder}"
  >
`;

const createLabel = field => `
  ${field.formOrder}.
  <label for="${field.contentfulFieldName}">${field.title}</label>
`;

const createTextArea = field => `
  <textarea id="${field.contentfulFieldName}"
  type="text"
  name="${field.contentfulFieldName}"
  placeholder="${field.formPlaceholder}"></textarea>
`;

const createUrlInputs = field => `
    <div class="url_fields field-wrapper" data-template-target="url-inputs">
      <div data-template-value='url-inputs' class="form-field-wrapper row">
        <i class="columns small-1 js-remove-field material-icons">remove_circle</i>
        <div class="columns small-11 medium-expand large-expand">
        <label for="${field.contentfulFieldName}-title">Citation Name</label>
        <input type="text" class="url_title" name="${field.contentfulFieldName}" placeholder="title" />
        </div>
        <div class="columns small-11 small-offset-1 medium-expand">
        <label for="${field.contentfulFieldName}-title">Citation URL</label>
        <input type="text" class="url_address" name="${field.contentfulFieldName}" placeholder="url" />
        </div>

      </div>
      <span class="js-add-url-inputs-field"><i class="material-icons">add_circle</i></span>
    </div>

`;

module.exports = {
  createBooleanDropdown,
  createCheckbox,
  createCheckboxes,
  createDropdownSelect,
  createInput,
  createLabel,
  createPreviousVersionsDropdown,
  createTextArea,
  createUrlInputs
};
