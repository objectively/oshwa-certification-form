const contentfulValues = [
  [
    {
      fields: {
        oshwaUid: 'US000052',
        responsibleParty: 'SparkFun Electronics',
        projectName: 'EasyDriver - Stepper Motor Driver'
      },
      sys: {
        space: { sys: { type: 'Link', linkType: 'Space', id: '000000' } },
        id: '4FxnNdBFQIyCiWua8mYom2',
        type: 'Entry',
        createdAt: '2018-08-18T21:46:20.061Z',
        updatedAt: '2018-08-21T02:34:21.686Z',
        environment: { sys: { id: 'master', type: 'Link', linkType: 'Environment' } },
        revision: 3,
        contentType: { sys: { type: 'Link', linkType: 'ContentType', id: 'project' } },
        locale: 'en-US'
      }
    }
  ],
  [
    {
      countryOptions: ['Afghanistan', 'Albania'],
      responsiblePartyTypeOptions: ['Individual', 'Company', 'Organization'],
      primaryProjectTypes: ['Other'],
      additionalProjectTypes: ['Other'],
      hardwareLicenses: ['Other'],
      softwareLicenses: ['Other'],
      documentationLicenses: ['Other']
    }
  ],
  {
    softwareExamples: [
      {
        sys: {
          space: { sys: { type: 'Link', linkType: 'Space', id: '000000' } }
        },
        fields: {
          projectOwner: 'Lorem ipsum',
          projectName: 'Lorem',
          projectUid: 'us000000',
          projectVersion: '1.0',
          projectWebsite: 'https://example.com',
          projectTypes: ['Other'],
          projectDescription: 'Lorem ipsum dolor sit amet',
          hardwareLicense: { sys: { type: 'Link', linkType: 'Entry', id: '000000' } },
          hardwareLicenseExplanation:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint accusantium assumenda quisquam ut quasi animi. Provident aut repudiandae, voluptate dolorum..',
          softwareLicense: { sys: { type: 'Link', linkType: 'Entry', id: '000000' } },
          softwareLicenseExplanation:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam molestias ipsa laudantium aspernatur pariatur ab aut, eum vitae minima necessitatibus.',
          documentationLicense: { sys: { type: 'Link', linkType: 'Entry', id: '000000' } },
          documentationLicenseExplanation:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas repellendus impedit at aliquid, tempora sapiente!',
          documentationUrl: 'https://wiki.apertus.org/index.php/Main_Page',
          brandingInformation:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt consequuntur fugiat consequatur, provident dolorum ad!',
          spectrumItems: [{ sys: { type: 'Link', linkType: 'Entry', id: '000000' } }]
        }
      }
    ],
    hardwareExamples: [
      {
        sys: {
          space: { sys: { type: 'Link', linkType: 'Space', id: '000000' } }
        },
        fields: {
          projectOwner: 'Lorem ipsum',
          projectName: 'Lorem',
          projectUid: 'us000000',
          projectVersion: '1.0',
          projectWebsite: 'https://example.com',
          projectTypes: ['Other'],
          projectDescription: 'Lorem ipsum dolor sit amet',
          hardwareLicense: { sys: { type: 'Link', linkType: 'Entry', id: '000000' } },
          hardwareLicenseExplanation:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint accusantium assumenda quisquam ut quasi animi. Provident aut repudiandae, voluptate dolorum..',
          softwareLicense: { sys: { type: 'Link', linkType: 'Entry', id: '000000' } },
          softwareLicenseExplanation:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam molestias ipsa laudantium aspernatur pariatur ab aut, eum vitae minima necessitatibus.',
          documentationLicense: { sys: { type: 'Link', linkType: 'Entry', id: '000000' } },
          documentationLicenseExplanation:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas repellendus impedit at aliquid, tempora sapiente!',
          documentationUrl: 'https://wiki.apertus.org/index.php/Main_Page',
          brandingInformation:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt consequuntur fugiat consequatur, provident dolorum ad!',
          spectrumItems: [{ sys: { type: 'Link', linkType: 'Entry', id: '000000' } }]
        }
      }
    ],
    documentationExamples: [
      {
        sys: {
          space: { sys: { type: 'Link', linkType: 'Space', id: '000000' } }
        },
        fields: {
          projectOwner: 'Lorem ipsum',
          projectName: 'Lorem',
          projectUid: 'us000000',
          projectVersion: '1.0',
          projectWebsite: 'https://example.com',
          projectTypes: ['Other'],
          projectDescription: 'Lorem ipsum dolor sit amet',
          hardwareLicense: { sys: { type: 'Link', linkType: 'Entry', id: '000000' } },
          hardwareLicenseExplanation:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint accusantium assumenda quisquam ut quasi animi. Provident aut repudiandae, voluptate dolorum..',
          softwareLicense: { sys: { type: 'Link', linkType: 'Entry', id: '000000' } },
          softwareLicenseExplanation:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam molestias ipsa laudantium aspernatur pariatur ab aut, eum vitae minima necessitatibus.',
          documentationLicense: { sys: { type: 'Link', linkType: 'Entry', id: '000000' } },
          documentationLicenseExplanation:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas repellendus impedit at aliquid, tempora sapiente!',
          documentationUrl: 'https://wiki.apertus.org/index.php/Main_Page',
          brandingInformation:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt consequuntur fugiat consequatur, provident dolorum ad!',
          spectrumItems: [{ sys: { type: 'Link', linkType: 'Entry', id: '000000' } }]
        }
      }
    ]
  }
];

module.exports = contentfulValues;
