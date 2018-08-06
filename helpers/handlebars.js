const createBooleanDropdown = field => `
  <div class="select">
    <select id="${field.contentfulFieldName}" type="text" name="${field.contentfulFieldName}" data-target="${
  field.contentfulFieldName
}">
      <option value="true">Yes</option>
      <option value="false">No</option>
    </select>
  </div>
`;

const createCheckbox = field => `
  <div class="checkbox">
    <input
      type="checkbox"
      id="${field.contentfulFieldName}"
      name="${field.contentfulFieldName}"
      value="true"
    />
    <label for="${field.contentfulFieldName}"></label>
  </div>
`;

const createCheckboxes = (field, options) => {
  let allCheckboxes = '';
  options.forEach(option => {
    allCheckboxes += `
      <div class="columns large-3 medium-4 small-6 checkbox">
        <input
          type="checkbox" id="${option}" name="${field.contentfulFieldName}" value="${option}"/>
        <label for="${option}">${option}</label>
      </div>
    `;
  });
  return `

  <div class="row">
    ${allCheckboxes}
  </div>
`;
};

const createCheckboxRows = (field, options) => {
  let allCheckboxes = '';
  options.forEach(option => {
    allCheckboxes += `
      <div class="columns small-12 checkbox">
        <input
          type="checkbox" id="${option}" name="${field.contentfulFieldName}" value="${option}"/>
        <label for="${option}">${option}</label>
      </div>
    `;
  });
  return `

  <div class="row">
    ${allCheckboxes}
  </div>
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
  <div id="textarea-message"></div>
`;

const createUrlInputs = field =>
  // dynamically added inputs are created in DynamicForm.generateUrlField
  `
    <div class="url_fields field-wrapper" data-template-target="url-inputs">
      <div data-template-value="url-inputs" class="form-field-wrapper row">
        <div class="row">
          <i class="js-remove-field material-icons">remove_circle</i>
          <div class="columns small-11 medium-5 large-5 ">
            <label for="${field.contentfulFieldName}[1]">Citation Name</label>
            <input type="text" class="url_create url_title" name="${
              field.contentfulFieldName
            }[1]" placeholder="title" />
          </div>
          <div class="columns small-11 small-offset-1 medium-5 large-5">
            <label for="${field.contentfulFieldName}[1]">Citation URL</label>
            <input type="text" class="url_create url_address" name="${
              field.contentfulFieldName
            }[1]" placeholder="url" />
          </div>
          <div class="columns small-offset-1 small-11 citation-error"></div>
        </div>
      </div>
      <div class="js-add-url-inputs-field"><i class="material-icons">add_circle</i></div>
    </div>
  `;

module.exports = {
  createBooleanDropdown,
  createCheckbox,
  createCheckboxes,
  createCheckboxRows,
  createDropdownSelect,
  createInput,
  createLabel,
  createPreviousVersionsDropdown,
  createTextArea,
  createUrlInputs
};
