const {
  addUrlFields,
  arrayCheckboxFormFields,
  arrayFields,
  booleanFormFields,
  booleanSelectFields,
  referenceFields
} = require('./form_parsers');

const isCheckboxArray = key => arrayCheckboxFormFields.indexOf(key) !== -1;
const isBoolean = key => booleanFormFields.indexOf(key) !== -1;
const isBooleanSelect = key => booleanSelectFields.indexOf(key) !== -1;
const isArrayField = key => arrayFields.indexOf(key) !== -1;
const isReferenceField = key => referenceFields.indexOf(key) !== -1;
const returnBooleanFromCheckbox = value => !!value;

const isAddUrlField = key => {
  // citations come from dynamically generated  form fields with names 'citations[x]'
  const citationsKeyRegex = /^citations\[\d+\]$/;
  return citationsKeyRegex.test(key);
};

const returnArrayFromCheckbox = values => {
  if (typeof values === 'string') {
    return values.split();
  }
  return values;
};

const returnBooleanFromSelect = values => {
  if (values === 'true') {
    return true;
  }
  return false;
};

const returnReferences = referenceIDs => {
  const references = [];
  if (!referenceIDs) {
    return [];
  }
  if (typeof referenceIDs === 'string') {
    references.push({ sys: { type: 'Link', linkType: 'Entry', id: referenceIDs } });
  } else {
    referenceIDs.forEach(id => {
      references.push({ sys: { type: 'Link', linkType: 'Entry', id } });
    });
  }

  return references;
};

const returnArrayFromTextField = str => {
  const arr = str.split(',');
  const results = [];

  arr.forEach(item => {
    results.push(decodeURI(item.trim()));
  });

  return arr;
};

const returnUrlToObj = urls => {
  const urlsArr = [];
  for (let i = 0; i < urls.length; i += 2) {
    if (urls[i] && urls[i + 1]) {
      urlsArr.push({ title: urls[i], url: urls[i + 1] });
    }
  }
  return urlsArr;
};

module.exports = {
  isAddUrlField,
  returnUrlToObj,
  isReferenceField,
  returnReferences,
  isArrayField,
  returnArrayFromTextField,
  isCheckboxArray,
  returnArrayFromCheckbox,
  isBoolean,
  returnBooleanFromCheckbox,
  isBooleanSelect,
  returnBooleanFromSelect
};
