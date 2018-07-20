const createLabel = field => `
  ${field.formOrder}.
  <label for="${field.contentfulFieldName}">${field.title}</label>
`;

const createInput = field => `
  <input type="text"
    id="${field.contentfulFieldName}"
    name="${field.contentfulFieldName}"
    placeholder="${field.formPlaceholder}"
  >
`;

const createDropdownSelect = (field, options) => {
  let allOptions = '';
  options.forEach(option => {
    allOptions += `
    <option value="${option}">${option}</option>
    `;
  });

  return `
    <select id="${field.contentfulFieldName}">
      <option value="">${field.formPlaceholder}</option>
      ${allOptions}
    </select>
  `;
};

const createTextArea = field => `
  <textarea id="${field.contentfulFieldName}"
  name="${field.contentfulFieldName}"
  placeholder="${field.formPlaceholder}">
  </textarea>
`;

const createCheckbox = field => `
  <div>
    <input
      type="checkbox"
      id="${field.contentfulFieldName}"
      name="${field.contentfulFieldName}"
      value="${field.contentfulFieldName}"
    />
    <label for="${field.contentfulFieldName}">${field.contentfulFieldName}</label>
  </div>
`;

const createCheckboxes = (field, options) => {
  let allCheckboxes = '';
  options.forEach(option => {
    allCheckboxes += `
      <div>
        <input
          type="checkbox" id="${option}" name="${option}" value="${option}" />
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

const createBooleanDropdown = field => `
  <select id="${field.contentfulFieldName}">
    <option value="true">Yes</option>
    <option value="false">No</option>
  </select>
`;

const createUrlInputs = field => `
  <div>
    <input type="text" name="${field.contentfulFieldName}Title" placeholder="title" />
    <input type="text" name="${field.contentfulFieldName}Url" placeholder="url" />
  </div>
`;

module.exports = {
  createDropdownSelect,
  createLabel,
  createInput,
  createTextArea,
  createCheckbox,
  createCheckboxes,
  createBooleanDropdown,
  createUrlInputs
};
