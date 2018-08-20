const formQuestions1 = require('../config/form_fields/section-1-questions');
const formQuestions2 = require('../config/form_fields/section-2-questions');
const formQuestions3 = require('../config/form_fields/section-3-questions');
const formQuestions4 = require('../config/form_fields/section-4-questions');

const addUrlFields = Object.keys(formQuestions1.field)
  .filter(item => formQuestions1.field[item].type === 'add_url')
  .concat(Object.keys(formQuestions2.field).filter(item => formQuestions2.field[item].fieldType === 'add_url'))
  .concat(Object.keys(formQuestions3.field).filter(item => formQuestions3.field[item].fieldType === 'add_url'))
  .concat(Object.keys(formQuestions4.field).filter(item => formQuestions4.field[item].fieldType === 'add_url'));

const arrayCheckboxFormFields = Object.keys(formQuestions1.field)
  .filter(item => formQuestions1.field[item].fieldType === 'checkbox_array')
  .concat(Object.keys(formQuestions2.field).filter(item => formQuestions2.field[item].fieldType === 'checkbox_array'))
  .concat(Object.keys(formQuestions3.field).filter(item => formQuestions3.field[item].fieldType === 'checkbox_array'))
  .concat(Object.keys(formQuestions4.field).filter(item => formQuestions4.field[item].fieldType === 'checkbox_array'));

const objectCheckboxFormFields = Object.keys(formQuestions1.field)
  .filter(item => formQuestions1.field[item].fieldType === 'checkbox_object')
  .concat(Object.keys(formQuestions2.field).filter(item => formQuestions2.field[item].fieldType === 'checkbox_object'))
  .concat(Object.keys(formQuestions3.field).filter(item => formQuestions3.field[item].fieldType === 'checkbox_object'))
  .concat(Object.keys(formQuestions4.field).filter(item => formQuestions4.field[item].fieldType === 'checkbox_object'));

const arrayFields = Object.keys(formQuestions1.field)
  .filter(item => formQuestions1.field[item].fieldType === 'string_array')
  .concat(Object.keys(formQuestions2.field).filter(item => formQuestions2.field[item].fieldType === 'string_array'))
  .concat(Object.keys(formQuestions3.field).filter(item => formQuestions3.field[item].fieldType === 'string_array'))
  .concat(Object.keys(formQuestions4.field).filter(item => formQuestions4.field[item].fieldType === 'string_array'));

const booleanFormFields = Object.keys(formQuestions1.field)
  .filter(item => formQuestions1.field[item].fieldType === 'boolean_checkbox')
  .concat(Object.keys(formQuestions2.field).filter(item => formQuestions2.field[item].fieldType === 'boolean_checkbox'))
  .concat(Object.keys(formQuestions3.field).filter(item => formQuestions3.field[item].fieldType === 'boolean_checkbox'))
  .concat(
    Object.keys(formQuestions4.field).filter(item => formQuestions4.field[item].fieldType === 'boolean_checkbox')
  );

const booleanSelectFields = Object.keys(formQuestions1.field)
  .filter(item => formQuestions1.field[item].fieldType === 'boolean_select')
  .concat(Object.keys(formQuestions2.field).filter(item => formQuestions2.field[item].fieldType === 'boolean_select'))
  .concat(Object.keys(formQuestions3.field).filter(item => formQuestions3.field[item].fieldType === 'boolean_select'))
  .concat(Object.keys(formQuestions4.field).filter(item => formQuestions4.field[item].fieldType === 'boolean_select'));

const referenceFields = Object.keys(formQuestions1.field)
  .filter(item => formQuestions1.field[item].fieldType === 'reference')
  .concat(Object.keys(formQuestions2.field).filter(item => formQuestions2.field[item].fieldType === 'reference'))
  .concat(Object.keys(formQuestions3.field).filter(item => formQuestions3.field[item].fieldType === 'reference'))
  .concat(Object.keys(formQuestions4.field).filter(item => formQuestions4.field[item].fieldType === 'reference'));

module.exports = {
  addUrlFields,
  arrayCheckboxFormFields,
  arrayFields,
  booleanFormFields,
  booleanSelectFields,
  objectCheckboxFormFields,
  referenceFields
};
