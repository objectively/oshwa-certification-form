const dotenv = require('dotenv');
dotenv.config();

const sinon = require('sinon');
const request = require('supertest');

const { assert, expect } = require('chai');

const projectValidations = require('../../../controllers/project_validations');

describe('Project Validations', () => {
  describe('returnBindingPartyDependency', () => {
    it('should pass validation if resposiblePartyType is "Individual" and bindingParty is not given', () => {
      const value = '';
      const req = { body: { responsiblePartyType: 'Individual' } };
      assert.equal(projectValidations.returnBindingPartyDependency(value, req), true);
      // Individual = true2 Individual 0
    });
    it('should pass validation if resposiblePartyType is "Individual" and bindingParty is given', () => {
      const value = 'Jane Doe';
      const req = { body: { responsiblePartyType: 'Individual' } };
      assert.equal(projectValidations.returnBindingPartyDependency(value, req), true);
      // Individual = true2 Individual 0
    });
    it('should fail validation if resposiblePartyType is not "Individual" and bindingPart is not given', () => {
      const value = '';
      const req = { body: { responsiblePartyType: 'Company' } };
      assert.equal(projectValidations.returnBindingPartyDependency(value, req), false);
      // Company, no binding party = false Company 0
    });
    it('should pass validation if  resposiblePartyType is not "Individual" and bindngParty is given', () => {
      const value = 'My Company Name';
      const req = { body: { responsiblePartyType: 'Company' } };
      assert.equal(projectValidations.returnBindingPartyDependency(value, req), true);
      // Company, binding party = true Company 5
    });
  });
  describe('returnExplanationDependency', () => {
    // "boolean" dropdowns return strings "true" or "false"
    it('should pass validation if dependent field is true and value is given', () => {
      const value = 'This is true';
      const req = { body: { noCommercialRestriction: 'true' } };
      assert.equal(projectValidations.returnExplanationDependency(value, req, 'noCommercialRestriction'), true);
    });
    it('should pass validation if dependent field is true and value is empty', () => {
      const value = '';
      const req = { body: { noCommercialRestriction: 'true' } };
      assert.equal(projectValidations.returnExplanationDependency(value, req, 'noCommercialRestriction'), true);
    });
    it('should fail validation if dependent field is false and value is empty', () => {
      const value = '';
      const req = { body: { noDocumentationRestriction: 'false' } };
      assert.equal(projectValidations.returnExplanationDependency(value, req, 'noDocumentationRestriction'), false);
    });
    it('should pass validation if dependent field is false and value is given', () => {
      const value = 'This is false';
      const req = { body: { noDocumentationRestriction: 'false' } };
      assert.equal(projectValidations.returnExplanationDependency(value, req, 'noDocumentationRestriction'), true);
    });
  });

  describe('returnCertificationExplanationDependency', () => {
    it('should pass validation if all certification mark fields are checked and explanation is not given', () => {
      const req = {
        body: {
          certificationMarkTerms: [
            'accurateContactInformation',
            'complianceWithOfficialCertificationGuidelines',
            'oshwaCertificationMark',
            'violationsEnforcement',
            'responsibility'
          ]
        }
      };
      const value = '';
      assert.equal(projectValidations.returnCertificationExplanationDependency(value, req), true);
    });
    it('should pass validation if all certification mark fields are checked and explanation is given', () => {
      const req = {
        body: {
          certificationMarkTerms: [
            'accurateContactInformation',
            'complianceWithOfficialCertificationGuidelines',
            'oshwaCertificationMark',
            'violationsEnforcement',
            'responsibility'
          ]
        }
      };
      const value = 'This is an explanation.';
      assert.equal(projectValidations.returnCertificationExplanationDependency(value, req), true);
    });
    it('should pass validation if certification mark fields is undefined and explanation is given', () => {
      const req = { body: {} };
      const value = 'This is an explanation';
      assert.equal(projectValidations.returnCertificationExplanationDependency(value, req), true);
    });
    it('should fail validation if certification mark fields is undefined and explanation is not given', () => {
      const req = { body: {} };
      const value = '';
      assert.equal(projectValidations.returnCertificationExplanationDependency(value, req), false);
    });
    it('should pass validation if one certification mark field is checked and explanation is given', () => {
      const req = { body: { certificationMarkTerms: 'accurateContactInformation' } };
      const value = 'This is an explanation.';
      assert.equal(projectValidations.returnCertificationExplanationDependency(value, req), true);
    });
    it('should fail validation if one certification mark fields is checked and explanation is not given', () => {
      const req = { body: { certificationMarkTerms: 'accurateContactInformation' } };
      const value = '';
      assert.equal(projectValidations.returnCertificationExplanationDependency(value, req), false);
    });
    it('should pass validation if more than one certification mark fields are checked and explanation is given', () => {
      const req = {
        body: {
          certificationMarkTerms: [
            'accurateContactInformation',
            'complianceWithOfficialCertificationGuidelines',
            'oshwaCertificationMark'
          ]
        }
      };
      const value = 'This is an explanation';
      assert.equal(projectValidations.returnCertificationExplanationDependency(value, req), true);
    });
    it('should fail validation if more than one certification mark fields are checked and explanation is not given', () => {
      const req = {
        body: {
          certificationMarkTerms: [
            'accurateContactInformation',
            'complianceWithOfficialCertificationGuidelines',
            'oshwaCertificationMark'
          ]
        }
      };
      const value = '';
      assert.equal(projectValidations.returnCertificationExplanationDependency(value, req), false);
    });
  });
});
