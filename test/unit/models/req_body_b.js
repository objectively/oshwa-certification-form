// previousVersions: string
// additionalType: string,
// certificationMarkTerms: none checked
// citations: none

const reqBodyB = {
  responsiblePartyType: 'Company',
  responsibleParty: 'My Company',
  bindingParty: 'Jane Doe',
  country: 'Albania',
  streetAddress1: 'Address One',
  streetAddress2: 'Address Two',
  city: 'My City',
  state: 'My State',
  postalCode: '1001001',
  privateContact: 'user@example.com',
  publicContact: 'user@example.com',
  projectName: 'My Example Project',
  projectVersion: '1.1',
  previousVersions: '39Oq5uGrPqA6GCY4awy2qS',
  projectDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies in nisl eget lobortis. Ut aliquam dui leo, ut pharetra ligula mollis non. Nam dictum non leo non ultricies. In laoreet neque quis nisl finibus semper. Curabitur bibendum eros sit amet interdum sodales. Aliquam vitae lacus euismod, faucibus felis at, cursus lectus. Mauris eleifend volutpat ex ut pharetra. Fusce quis felis vitae metus venenatis dignissim. Nam nulla erat, lacinia ut congue eget, vulputate ut tellus. Vestibulum cursus at nibh eget rutrum.',
  projectWebsite: 'http://example.com',
  primaryType: '3D Printing',
  additionalType: '3D Printing',
  projectKeywords: 'keyword one, keyword two, keyword three',
  documentationUrl: 'http://example.com',
  availableFileFormat: 'false',
  'citations[1]': ['', ''],
  hardwareLicense: 'CERN',
  softwareLicense: 'Apache',
  documentationLicense: 'CC 0',
  noCommercialRestriction: 'false',
  explanationNcr:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies in nisl eget lobortis. Ut aliquam dui leo, ut pharetra ligula mollis non. Nam dictum non leo non ultricies. In laoreet neque quis nisl finibus semper. Curabitur bibendum eros sit amet interdum sodales. Aliquam vitae lacus euismod, faucibus felis at, cursus lectus. Mauris eleifend volutpat ex ut pharetra. Fusce quis felis vitae metus venenatis dignissim. Nam nulla erat, lacinia ut congue eget, vulputate ut tellus. Vestibulum cursus at nibh eget rutrum.',
  noDocumentationRestriction: 'false',
  explanationNdr:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies in nisl eget lobortis. Ut aliquam dui leo, ut pharetra ligula mollis non. Nam dictum non leo non ultricies. In laoreet neque quis nisl finibus semper. Curabitur bibendum eros sit amet interdum sodales. Aliquam vitae lacus euismod, faucibus felis at, cursus lectus. Mauris eleifend volutpat ex ut pharetra. Fusce quis felis vitae metus venenatis dignissim. Nam nulla erat, lacinia ut congue eget, vulputate ut tellus. Vestibulum cursus at nibh eget rutrum.',
  openHardwareComponents: 'true',
  explanationOhwc: '',
  creatorContribution: 'true',
  explanationCcr: '',
  noUseRestriction: 'true',
  explanationNur: '',
  redistributedWork: 'true',
  explanationRwr: '',
  noSpecificProduct: 'true',
  explanationNsp: '',
  noComponentRestriction: 'true',
  explanationNor: '',
  technologyNeutral: 'true',
  explanationTn: '',
  explanationCertificationTerms:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies in nisl eget lobortis. Ut aliquam dui leo, ut pharetra ligula mollis non. Nam dictum non leo non ultricies. In laoreet neque quis nisl finibus semper. Curabitur bibendum eros sit amet interdum sodales. Aliquam vitae lacus euismod, faucibus felis at, cursus lectus. Mauris eleifend volutpat ex ut pharetra. Fusce quis felis vitae metus venenatis dignissim. Nam nulla erat, lacinia ut congue eget, vulputate ut tellus. Vestibulum cursus at nibh eget rutrum.',
  relationship: '',
  agreementTerms: 'false',
  parentName: 'Name',
  'g-recaptcha-response': '1001001',
  hiddenRecaptcha: ''
};

const reqBodyBMapped = {
  responsiblePartyType: { 'en-US': 'Company' },
  responsibleParty: { 'en-US': 'My Company' },
  bindingParty: { 'en-US': 'Jane Doe' },
  country: { 'en-US': 'Albania' },
  streetAddress1: { 'en-US': 'Address One' },
  streetAddress2: { 'en-US': 'Address Two' },
  city: { 'en-US': 'My City' },
  state: { 'en-US': 'My State' },
  postalCode: { 'en-US': '1001001' },
  privateContact: { 'en-US': 'user@example.com' },
  publicContact: { 'en-US': 'user@example.com' },
  projectName: { 'en-US': 'My Example Project' },
  projectVersion: { 'en-US': '1.1' },
  previousVersions: { 'en-US': [{ sys: { type: 'Link', linkType: 'Entry', id: '39Oq5uGrPqA6GCY4awy2qS' } }] },
  projectDescription: {
    'en-US':
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies in nisl eget lobortis. Ut aliquam dui leo, ut pharetra ligula mollis non. Nam dictum non leo non ultricies. In laoreet neque quis nisl finibus semper. Curabitur bibendum eros sit amet interdum sodales. Aliquam vitae lacus euismod, faucibus felis at, cursus lectus. Mauris eleifend volutpat ex ut pharetra. Fusce quis felis vitae metus venenatis dignissim. Nam nulla erat, lacinia ut congue eget, vulputate ut tellus. Vestibulum cursus at nibh eget rutrum.'
  },
  projectWebsite: { 'en-US': 'http://example.com' },
  primaryType: { 'en-US': '3D Printing' },
  additionalType: { 'en-US': ['3D Printing'] },
  projectKeywords: { 'en-US': ['keyword one', ' keyword two', ' keyword three'] },
  documentationUrl: { 'en-US': 'http://example.com' },
  availableFileFormat: { 'en-US': true },
  hardwareLicense: { 'en-US': 'CERN' },
  softwareLicense: { 'en-US': 'Apache' },
  documentationLicense: { 'en-US': 'CC 0' },
  noCommercialRestriction: { 'en-US': false },
  explanationNcr: {
    'en-US':
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies in nisl eget lobortis. Ut aliquam dui leo, ut pharetra ligula mollis non. Nam dictum non leo non ultricies. In laoreet neque quis nisl finibus semper. Curabitur bibendum eros sit amet interdum sodales. Aliquam vitae lacus euismod, faucibus felis at, cursus lectus. Mauris eleifend volutpat ex ut pharetra. Fusce quis felis vitae metus venenatis dignissim. Nam nulla erat, lacinia ut congue eget, vulputate ut tellus. Vestibulum cursus at nibh eget rutrum.'
  },
  noDocumentationRestriction: { 'en-US': false },
  explanationNdr: {
    'en-US':
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies in nisl eget lobortis. Ut aliquam dui leo, ut pharetra ligula mollis non. Nam dictum non leo non ultricies. In laoreet neque quis nisl finibus semper. Curabitur bibendum eros sit amet interdum sodales. Aliquam vitae lacus euismod, faucibus felis at, cursus lectus. Mauris eleifend volutpat ex ut pharetra. Fusce quis felis vitae metus venenatis dignissim. Nam nulla erat, lacinia ut congue eget, vulputate ut tellus. Vestibulum cursus at nibh eget rutrum.'
  },
  openHardwareComponents: { 'en-US': true },
  explanationOhwc: { 'en-US': '' },
  creatorContribution: { 'en-US': true },
  explanationCcr: { 'en-US': '' },
  noUseRestriction: { 'en-US': true },
  explanationNur: { 'en-US': '' },
  redistributedWork: { 'en-US': true },
  explanationRwr: { 'en-US': '' },
  noSpecificProduct: { 'en-US': true },
  explanationNsp: { 'en-US': '' },
  noComponentRestriction: { 'en-US': true },
  explanationNor: { 'en-US': '' },
  technologyNeutral: { 'en-US': true },
  explanationTn: { 'en-US': '' },
  explanationCertificationTerms: {
    'en-US':
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies in nisl eget lobortis. Ut aliquam dui leo, ut pharetra ligula mollis non. Nam dictum non leo non ultricies. In laoreet neque quis nisl finibus semper. Curabitur bibendum eros sit amet interdum sodales. Aliquam vitae lacus euismod, faucibus felis at, cursus lectus. Mauris eleifend volutpat ex ut pharetra. Fusce quis felis vitae metus venenatis dignissim. Nam nulla erat, lacinia ut congue eget, vulputate ut tellus. Vestibulum cursus at nibh eget rutrum.'
  },
  relationship: { 'en-US': '' },
  agreementTerms: { 'en-US': true },
  parentName: { 'en-US': 'Name' },
  citations: { 'en-US': [] }
};

module.exports = { reqBodyB, reqBodyBMapped };
