const md = require('marked');
const { certificationMarkTerms, citationsKeyRegex } = require('./form_helpers');

const createBooleanDropdown = content => {
  const { hash: { formValues, selection } } = content;
  const { instructions } = formValues || '';
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
      <select id="${formValues.contentfulFieldName}" type="text" name="${
    formValues.contentfulFieldName
  }" data-target="${formValues.contentfulFieldName}">
        ${renderedOptions}
      </select>
    </div>
    <div class="instructions">
      ${instructions}
    </div>
  `;
};

const createCheckbox = content => {
  const { hash: { formValues, checked } } = content;
  const { instructions } = formValues || '';
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
    <label class="single_checkbox_label" for="${formValues.contentfulFieldName}">${formValues.title}</label>
    <div class="instructions">
      ${instructions}
    </div>
  </div>
`;
};

const createCheckboxes = content => {
  const { hash: { formValues, projectTypes, checkedTypes } } = content;
  const { instructions } = formValues || '';
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

      <fieldset>
        <legend>${instructions}</legend>
        <div class="row">
          ${allCheckboxes}
        </div>
      </fieldset>

  `;
};

const createDropdownSelect = content => {
  const { hash: { formValues, options, selection } } = content;
  const { instructions } = formValues || '';

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
    <div class="instructions">
      ${instructions}
    </div>
  `;
};

const createPreviousVersionsDropdown = content => {
  const { hash: { formValues, projectsList, selectedProjects } } = content;
  const { instructions } = formValues;

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
      <label for="select2-search__field">Previous versions</label>
      <div class="instructions">
        ${instructions}
      </div>
  `;
};

const createInput = content => {
  const { hash: { formValues } } = content;
  const inputValue = content.hash.inputValue || '';
  const { instructions } = formValues || '';
  return `
    <input type="text"
      id="${formValues.contentfulFieldName}"
      name="${formValues.contentfulFieldName}"
      placeholder="${formValues.formPlaceholder}"
      ${inputValue ? `value=${inputValue}` : `value=""`}
    >
    <div class="instructions">
      ${instructions}
    </div>
  `;
};

const createLabel = content => {
  const { hash: { formValues } } = content;
  return `
  <label for="${formValues.contentfulFieldName}">${formValues.title}</label>
`;
};

const createTextArea = content => {
  const { hash: { formValues, hide } } = content;
  const inputValue = content.hash.inputValue || '';
  const { instructions } = formValues || '';

  return `
    <textarea id="${formValues.contentfulFieldName}"
    type="text"
    name="${formValues.contentfulFieldName}"
    placeholder="${formValues.formPlaceholder}"
    >${inputValue}</textarea>
    <div class="textarea-message"></div>
    <div class="instructions">
      ${instructions}
    </div>
  `;
};

const createExplanationTextArea = content => {
  const { hash: { formValues, hide } } = content;
  const { instructions } = formValues || '';
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
        <label for="${formValues.contentfulFieldName}">${formValues.title}</label>
      </div>
      <div class="columns">
        <textarea id="${formValues.contentfulFieldName}" type="text" name="${
    formValues.contentfulFieldName
  }" placeholder="${formValues.formPlaceholder}">${inputValue}</textarea>
      <div class="textarea-message"></div>
        ${instructions}
      </div>
    </div>
`;
};

const generateUrlCitationFields = (fieldName, placeholder, count = 1, addedCitations) => {
  const citationInputs = `
    <div data-template-value="url-inputs" class="form-field-wrapper row">
      <div class="columns small-1"><i class="js-remove-field material-icons">remove_circle</i></div>
      <div class="columns small-11 large-5 medium-5">
        <label for="${fieldName}[${count}]--url_title">Citation Title</label>
        <input
        id="${fieldName}[${count}]--url_title"
        type="text"
        class="url_create url_title"
        name="${fieldName}[${count}]"
        placeholder="Enter citation title"
        ${addedCitations ? `value=${addedCitations[count][0]}` : `value=""`}
        />
      </div>
      <div class="columns small-offset-1 small-11 large-5 medium-5">
        <label for="${fieldName}[${count}]--url_address">Citation URL</label>
        <input
        id="${fieldName}[${count}]--url_address"
        type="text"
        class="url_create url_address"
        name="${fieldName}[${count}]"
        placeholder="${placeholder}"
        ${addedCitations ? `value=${addedCitations[count][1]}` : `value=""`}
        />
        <div class="instructions">Include the protocol to your URL (e.g. http:// or https://)</div>
      </div>
      <div class="columns large-offset-1 citation-error"></div>
    </div>
  `;
  return citationInputs;
};

const createUrlInputs = content => {
  const { hash: { formValues, citationValues } } = content;
  const { instructions } = formValues || '';
  let urlFields = '';
  if (citationValues.length === 0) {
    urlFields = generateUrlCitationFields(formValues.contentfulFieldName, formValues.formPlaceholder, 1);
  } else {
    for (let i = 0; i < citationValues.length; i++) {
      urlFields += generateUrlCitationFields(
        formValues.contentfulFieldName,
        formValues.formPlaceholder,
        i,
        citationValues
      );
    }
  }
  return `
    <div class="url_fields field-wrapper" data-template-target="url-inputs">
      ${urlFields}
      <div class="row columns js-add-url-inputs-field"><i class="material-icons">add_circle</i></div>
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

const markdownify = str => {
  if (str) {
    return md(str);
  }
};

const createCertificationMarkTerms = content => {
  const { hash: { formValues, checkedOptions } } = content;
  const { instructions } = formValues || '';
  let allCheckboxes = '';

  Object.keys(certificationMarkTerms).map(option => {
    allCheckboxes += `<div class="columns small-12 checkbox">
      <input
        type="checkbox" id="${option}" name="${formValues.contentfulFieldName}" value="${option}" ${
      checkedOptions && checkedOptions.indexOf(option) !== -1 ? `checked=checked` : ``
    }
      />
      <label for="${option}">${certificationMarkTerms[option].term}</label>
    </div>`;
  });

  return `
    <div class="row">
      <fieldset>
        <legend>${formValues.instructions}</legend>
        <div class="instructions">
        </div>
        ${allCheckboxes}
      </fieldset>
    </div>
  `;
};

const toLowerCase = str => {
  return str.toLowerCase();
};

module.exports = {
  createBooleanDropdown,
  createCertificationMarkTerms,
  createCheckbox,
  createCheckboxes,
  createDropdownSelect,
  createInput,
  createLabel,
  createPreviousVersionsDropdown,
  createExplanationTextArea,
  createTextArea,
  createUrlInputs,
  getCitationValues,
  getCheckedTypes,
  toLowerCase,
  markdownify
};
