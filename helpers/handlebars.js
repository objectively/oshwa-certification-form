const { citationsKeyRegex } = require('./form_helpers');

const createBooleanDropdown = content => {
  const { hash: { formValues, selection } } = content;
  let renderedOptions;
  if (selection === undefined || selection === true) {
    renderedOptions = `
      <option value="true" selected>Yes</option>
      <option value="false">No</option>
    `;
  } else if (selection === false) {
    renderedOptions = `
      <option value="true">Yes</option>
      <option value="false" selected>No</option>
    `;
  }
  return `
  <div class="select">
    <select id="${formValues.contentfulFieldName}" type="text" name="${formValues.contentfulFieldName}" data-target="${
    formValues.contentfulFieldName
  }">
      ${renderedOptions}
    </select>
  </div>
`;
};

const createCheckbox = content => {
  const { hash: { formValues, checked } } = content;
  const isChecked = checked || false;
  return `
  <div class="checkbox">
    <input
      type="checkbox"
      id="${formValues.contentfulFieldName}"
      name="${formValues.contentfulFieldName}"
      value="${isChecked}"
      ${isChecked ? `checked=checked` : ``}
    />
    <label for="${formValues.contentfulFieldName}">${formValues.title}</label>
  </div>
`;
};

const createCheckboxes = content => {
  const { hash: { formValues, projectTypes, checkedTypes } } = content;

  let allCheckboxes = '';
  projectTypes.forEach(option => {
    allCheckboxes += `
        <div class="columns large-3 medium-4 small-6 checkbox">
          <input
            type="checkbox" id="${option}" name="${formValues.contentfulFieldName}" value="${option}"
            ${checkedTypes && checkedTypes.indexOf(option) !== -1 ? `checked=checked` : ``}
            />
          <label for="${option}">${option}</label>
        </div>
      `;
  });
  return `
    <div class="row">
      <fieldset>
        <legend>${formValues.title}</legend>
        <div class="row">
          ${allCheckboxes}
        </div>
      </fieldset>
    </div>
  `;
};

const createCheckboxRows = content => {
  const { hash: { formValues, options, checkedOptions } } = content;
  let allCheckboxes = '';
  options.forEach(option => {
    allCheckboxes += `
      <div class="columns small-12 checkbox">
        <input
          type="checkbox" id="${option}" name="${formValues.contentfulFieldName}" value="${option}"
            ${checkedOptions && checkedOptions.indexOf(option) !== -1 ? `checked=checked` : ``}
        />
        <label for="${option}">${option}</label>
      </div>
    `;
  });
  return `
    <div class="row">
      <fieldset>
        <legend>${formValues.title}</legend>
        ${allCheckboxes}
      </fieldset>
    </div>
  `;
};

const createDropdownSelect = content => {
  const { hash: { formValues, options, selection } } = content;
  let allOptions = '';
  options.forEach(option => {
    allOptions += `
    <option value="${option}" ${option == selection ? `selected` : ``}>${option}</option>
    `;
  });

  return `
    <div class="select">
      <select id="${formValues.contentfulFieldName}" type="text" name="${formValues.contentfulFieldName}">
        <option value="" disabled selected>${formValues.formPlaceholder}</option>
        ${allOptions}
      </select>
    </div>
  `;
};

const createPreviousVersionsDropdown = content => {
  const { hash: { formValues, projectsList, selectedProjects } } = content;

  let allProjects = '';
  projectsList.forEach(project => {
    allProjects += `
    <option value="${project.sys.id}" ${
      selectedProjects && selectedProjects.indexOf(project.sys.id) !== -1 ? `selected` : ``
    }>${project.fields.oshwaUid}: ${project.fields.responsibleParty} - ${project.fields.projectName} </option>
    `;
  });

  return `
    <div class="select select-previous-versions" >
      <select id="${formValues.contentfulFieldName}" multiple="multiple" class="${
    formValues.contentfulFieldName
  }" type="text" name="${formValues.contentfulFieldName}">
        <option></option>
        ${allProjects}
      </select>
    </div>
    <label for="select2-search__field">Search by OSHWA UID, owner, or project name</label>
  `;
};

const createInput = content => {
  const { hash: { formValues } } = content;
  const inputValue = content.hash.inputValue || '';

  return `
    <input type="text"
      id="${formValues.contentfulFieldName}"
      name="${formValues.contentfulFieldName}"
      placeholder="${formValues.formPlaceholder}"
      ${inputValue ? `value=${inputValue}` : `value=""`}
    >
  `;
};

const createLabel = content => {
  const { hash: { formValues } } = content;
  return `
  ${formValues.formOrder}.
  <label for="${formValues.contentfulFieldName}">${formValues.title}</label>
`;
};

const createTextArea = content => {
  const { hash: { formValues, hide } } = content;
  const inputValue = content.hash.inputValue || '';
  return `
    <textarea id="${formValues.contentfulFieldName}"
    type="text"
    name="${formValues.contentfulFieldName}"
    placeholder="${formValues.formPlaceholder}"
    >${inputValue}</textarea>
    <div class="textarea-message"></div>
`;
};

const createExplanationTextArea = content => {
  const { hash: { formValues, hide } } = content;
  const inputValue = content.hash.inputValue || '';
  let isHidden;
  if (hide === undefined || hide === true) {
    isHidden = true;
  } else {
    isHidden = false;
  }
  return `
    <div class="row explanation-field ${isHidden ? `hide` : ``}" data-value="${formValues.requiredDependency}">
      <div class="columns large-3 small-12">
         ${formValues.formOrder}.
        <label for="${formValues.contentfulFieldName}">${formValues.title}</label>
      </div>
      <div class="columns">
        <textarea id="${formValues.contentfulFieldName}" type="text" name="${
    formValues.contentfulFieldName
  }" placeholder="${formValues.formPlaceholder}">${inputValue}</textarea>
        <div class="textarea-message"></div>
      </div>
    </div>
`;
};

const createUrlInputs = content => {
  const { hash: { formValues, citationValues } } = content;
  let urlFields = '';
  if (citationValues.length === 0) {
    urlFields += `
    <div data-template-value="url-inputs" class="form-field-wrapper row">
      <div class="row">
        <i class="js-remove-field material-icons">remove_circle</i>
        <div class="columns small-11 medium-5 large-5 ">
          <label for="${formValues.contentfulFieldName}[1]--url_title">Citation Name</label>
          <input id="${formValues.contentfulFieldName}[1]--url_title" type="text" class="url_create url_title" name="${
      formValues.contentfulFieldName
    }[1]" placeholder="title" />
        </div>
        <div class="columns small-11 small-offset-1 medium-5 large-5">
          <label for="${formValues.contentfulFieldName}[1]--url_address">Citation URL</label>
          <input id="${
            formValues.contentfulFieldName
          }[1]--url_address" type="text" class="url_create url_address" name="${
      formValues.contentfulFieldName
    }[1]" placeholder="url" />
        </div>
        <div class="columns small-offset-1 small-11 citation-error"></div>
      </div>
    </div>
    `;
  } else {
    for (let i = 0; i < citationValues.length; i++) {
      urlFields += `
      <div data-template-value="url-inputs" class="form-field-wrapper row">
        <div class="row">
          <i class="js-remove-field material-icons">remove_circle</i>
          <div class="columns small-11 medium-5 large-5 ">
            <label for="${formValues.contentfulFieldName}[${i + 1}]--url_title">Citation Name</label>
            <input id="${formValues.contentfulFieldName}[${i +
        1}]--url_title" type="text" class="url_create url_title" name="${formValues.contentfulFieldName}[${i +
        1}]" placeholder="title" value="${citationValues[i][0]}" />
          </div>
          <div class="columns small-11 small-offset-1 medium-5 large-5">
            <label for="${formValues.contentfulFieldName}[${i + 1}]--url_address">Citation URL</label>
            <input id="${formValues.contentfulFieldName}[${i +
        1}]--url_address" type="text" class="url_create url_address" name="${formValues.contentfulFieldName}[${i +
        1}]" placeholder="url" value="${citationValues[i][1]}" >
          </div>
          <div class="columns small-offset-1 small-11 citation-error"></div>
        </div>
      </div>
      `;
    }
  }
  // dynamically added inputs are created in DynamicForm.generateUrlField
  return `
    <div class="url_fields field-wrapper" data-template-target="url-inputs">
      ${urlFields}
      <div class="js-add-url-inputs-field"><i class="material-icons">add_circle</i></div>
    </div>
  `;
};

const getCitationValues = project => {
  const citationElements = [];
  if (project) {
    Object.keys(project).forEach(key => {
      if (citationsKeyRegex.test(key)) {
        citationElements.push(project[key]);
      }
    });
  }
  return citationElements;
};

const getCheckedTypes = project => {
  if (project && project.additionalType) {
    return project.additionalType;
  }
};
module.exports = {
  createBooleanDropdown,
  createCheckbox,
  createCheckboxes,
  createCheckboxRows,
  createDropdownSelect,
  createInput,
  createLabel,
  createPreviousVersionsDropdown,
  createExplanationTextArea,
  createTextArea,
  createUrlInputs,
  getCitationValues,
  getCheckedTypes
};
