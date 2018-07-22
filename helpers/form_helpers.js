const formQuestions1 = require('../config/form_fields/section-1-questions');
const formQuestions2 = require('../config/form_fields/section-2-questions');
const formQuestions3 = require('../config/form_fields/section-3-questions');
const formQuestions4 = require('../config/form_fields/section-4-questions');

const booleanFormFields = Object.keys(formQuestions1.field)
  .filter(item => formQuestions1.field[item].type === 'boolean' && formQuestions1.field[item].fieldType === 'checkbox')
  .concat(
    Object.keys(formQuestions2.field).filter(
      item => formQuestions2.field[item].type === 'boolean' && formQuestions2.field[item].fieldType === 'checkbox'
    )
  )
  .concat(
    Object.keys(formQuestions3.field).filter(
      item => formQuestions3.field[item].type === 'boolean' && formQuestions3.field[item].fieldType === 'checkbox'
    )
  )
  .concat(
    Object.keys(formQuestions4.field).filter(
      item => formQuestions4.field[item].type === 'boolean' && formQuestions4.field[item].fieldType === 'checkbox'
    )
  );

const arrayCheckboxFormFields = Object.keys(formQuestions1.field)
  .filter(item => formQuestions1.field[item].type === 'array' && formQuestions1.field[item].fieldType === 'checkbox')
  .concat(
    Object.keys(formQuestions2.field).filter(
      item => formQuestions2.field[item].type === 'array' && formQuestions2.field[item].fieldType === 'checkbox'
    )
  )
  .concat(
    Object.keys(formQuestions3.field).filter(
      item => formQuestions3.field[item].type === 'array' && formQuestions3.field[item].fieldType === 'checkbox'
    )
  )
  .concat(
    Object.keys(formQuestions4.field).filter(
      item => formQuestions4.field[item].type === 'array' && formQuestions4.field[item].fieldType === 'checkbox'
    )
  );

const booleanSelectFields = Object.keys(formQuestions1.field)
  .filter(item => formQuestions1.field[item].type === 'boolean' && formQuestions1.field[item].fieldType === 'select')
  .concat(
    Object.keys(formQuestions2.field).filter(
      item => formQuestions2.field[item].type === 'boolean' && formQuestions2.field[item].fieldType === 'select'
    )
  )
  .concat(
    Object.keys(formQuestions3.field).filter(
      item => formQuestions3.field[item].type === 'boolean' && formQuestions3.field[item].fieldType === 'select'
    )
  )
  .concat(
    Object.keys(formQuestions4.field).filter(
      item => formQuestions4.field[item].type === 'boolean' && formQuestions4.field[item].fieldType === 'select'
    )
  );

const isCheckboxArray = key => arrayCheckboxFormFields.indexOf(key) !== -1;

const isBoolean = key => booleanFormFields.indexOf(key) !== -1;

const returnBooleanFromCheckbox = value => !!value;

const returnArrayFromCheckbox = values => {
  if (typeof values === 'string') {
    return values.split();
  }
  return values;
};

const isBooleanSelect = key => booleanSelectFields.indexOf(key) !== -1;

const returnBooleanFromSelect = values => {
  if (values === 'true') {
    return true;
  }
  return false;
};

module.exports = {
  booleanFormFields,
  booleanSelectFields,
  returnArrayFromCheckbox,
  returnBooleanFromCheckbox,
  isBoolean,
  isCheckboxArray,
  isBooleanSelect,
  returnBooleanFromSelect
};
