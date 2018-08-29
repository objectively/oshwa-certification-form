const { expect } = require('chai');
const Project = require('../../../models/project');

const { reqBodyA, reqBodyAMapped } = require('./req_body_a');
const { reqBodyB, reqBodyBMapped } = require('./req_body_b');

const contentfulProjectA = new Project(reqBodyA);
const contentfulProjectB = new Project(reqBodyB);

describe('Project Model', () => {
  it('creates a Project with assigned data', () => {
    const myProject = new Project({ firstName: 'Jane', lastName: 'Doe' });
    expect(myProject.firstName).to.equal('Jane');
    expect(myProject.lastName).to.equal('Doe');
  });

  it('maps project fields to contentful', () => {
    expect(contentfulProjectA.mapFieldsToContentful()).to.deep.equal(reqBodyAMapped);
    expect(contentfulProjectB.mapFieldsToContentful()).to.deep.equal(reqBodyBMapped);
  });
});
