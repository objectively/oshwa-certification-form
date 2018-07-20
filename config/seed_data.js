const countryOptions = ['United States', 'Spain'];

const responsiblePartyTypeOptions = ['Individual', 'Organization', 'Corporation'];

const projectTypes = ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5', 'Type 6', 'Type 7', 'Type 8'];

const hardwareLicenses = ['CERN', 'TAPR'];

const softwareLicenses = ['Apache', 'BSD 2-Clause', 'BSD 3-Clause', 'CC 0', 'CC BY', 'CC BY-SA', 'GPL', 'MIT'];

const documentationLicenses = ['CC 0', 'CC BY', 'CC BY-SA'];

const certificationMarkChecklist = [
  'Accurate contact information',
  'Compliance with official certification guidelines',
  'Right, title, and interest of mark remains with OSHWA',
  'OSHWA has right to enforce violations of use of mark',
  'Ability to bind responsible party to agreement'
];

module.exports = {
  countryOptions,
  responsiblePartyTypeOptions,
  projectTypes,
  hardwareLicenses,
  softwareLicenses,
  documentationLicenses,
  certificationMarkChecklist
};
