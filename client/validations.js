const Validations = {
  setupDOMElements() {
    this.$form = $('form');
  },
  validateForm() {
    this.$form.validate({
      rules: {
        ignore: '.ignore',
        responsiblePartyType: { required: true },
        oshwaUid: { required: true },
        responsibleParty: { required: true },
        bindingParty: {
          required: {
            depends() {
              return $("select[name='responsiblePartyType']").val() !== 'Individual';
            }
          }
        },
        country: { required: true },
        streetAddress1: {},
        streetAddress2: {},
        city: {},
        state: {},
        postalCode: {},
        privateContact: {
          required: false,
          email: true
        },
        publicContact: {
          required: false,
          email: true
        },
        projectName: {},
        projectVersion: {},
        previousVersions: {},
        projectDescription: {},
        projectWebsite: {
          required: false,
          url: true,
          validUrl: true
        },
        primaryType: { required: true },
        additionalType: {},
        projectKeywords: {},
        documentationUrl: {
          required: false,
          url: true,
          validUrl: true
        },
        availableFileFormat: {},
        citations: {},
        hardwareLicense: { required: true },
        softwareLicense: { required: true },
        documentationLicense: { required: true },
        noCommercialRestriction: {},
        explanationNcr: {
          required: {
            depends() {
              return $("select[name='noCommercialRestriction']").val() === 'false';
            }
          }
        },
        noDocumentationRestriction: {},
        explanationNdr: {
          required: {
            depends() {
              return $("select[name='noDocumentationRestriction']").val() === 'false';
            }
          }
        },
        openHardwareComponents: {},
        explanationOhwc: {
          required: {
            depends() {
              return $("select[name='openHardwareComponents']").val() === 'false';
            }
          }
        },
        creatorContribution: {},
        explanationCcr: {
          required: {
            depends() {
              return $("select[name='creatorContribution']").val() === 'false';
            }
          }
        },
        noUseRestriction: {},
        explanationNur: {
          required: {
            depends() {
              return $("select[name='noUseRestriction']").val() === 'false';
            }
          }
        },
        redistributedWork: {},
        explanationRwr: {
          required: {
            depends() {
              return $("select[name='redistributedWork']").val() === 'false';
            }
          }
        },
        noSpecificProduct: {},
        explanationNsp: {
          required: {
            depends() {
              return $("select[name='noSpecificProduct']").val() === 'false';
            }
          }
        },
        noComponentRestriction: {},
        explanationNor: {
          required: {
            depends() {
              return $("select[name='noComponentRestriction']").val() === 'false';
            }
          }
        },
        technologyNeutral: {},
        explanationTn: {
          required: {
            depends() {
              return $("select[name='technologyNeutral']").val() === 'false';
            }
          }
        },
        certificationmarkTermss: {},
        explanationCertificationTerms: {
          required: {
            depends() {
              const numTerms = $("input[name='certificationmarkTerms']").length;
              const numSelected = $("input[name='certificationmarkTerms']:checked").length;
              return numTerms !== numSelected;
            }
          }
        },
        relationship: {},
        agreementTerms: { required: true },
        parentName: {},
        certificationDate: { required: true }
      },
      messages: {
        responsiblePartyType: { required: 'Please select the responsible party type' },
        oshwaUid: { required: '' },
        responsibleParty: { required: 'Please enter the name of the responsible party' },
        bindingParty: {},
        country: { required: 'Please select a country' },
        streetAddress1: {},
        streetAddress2: {},
        city: {},
        state: {},
        postalCode: {},
        privateContact: {},
        publicContact: {},
        projectName: {},
        projectVersion: {},
        previousVersions: {},
        projectDescription: {},
        projectWebsite: {},
        primaryType: { required: 'Primary project type is required' },
        additionalType: {},
        projectKeywords: {},
        documentationUrl: {},
        availableFileFormat: {},
        citations: {},
        hardwareLicense: { required: 'This field is required' },
        softwareLicense: { required: 'This field is required' },
        documentationLicense: { required: 'This field is required' },
        noCommercialRestriction: {},
        explanationNcr: { required: 'This field is required if you answered no above.' },
        noDocumentationRestriction: {},
        explanationNdr: { required: 'This field is required if you answered no above.' },
        openHardwareComponents: {},
        explanationOhwc: { required: 'This field is required if you answered no above.' },
        creatorContribution: {},
        explanationCcr: { required: 'This field is required if you answered no above.' },
        noUseRestriction: {},
        explanationNur: { required: 'This field is required if you answered no above.' },
        redistributedWork: {},
        explanationRwr: { required: 'This field is required if you answered no above.' },
        noSpecificProduct: {},
        explanationNsp: { required: 'This field is required if you answered no above.' },
        noComponentRestriction: {},
        explanationNor: { required: 'This field is required if you answered no above.' },
        technologyNeutral: {},
        explanationTn: { required: 'This field is required if you answered no above.' },
        certificationmarkTerms: {},
        explanationCertificationTerms: { required: 'This field is required if you answered no above.' },
        relationship: {},
        agreementTerms: {},
        parentName: {},
        certificationDate: { required: '' }
      },
      errorPlacement: (error, element) => {
        if (element[0].tagName === 'SELECT') {
          error.insertAfter(element.parent());
        } else if (element.attr('name') === 'agreementTerms') {
          error.insertAfter(element.parent().parent());
        } else {
          error.insertAfter(element);
        }
      }
    });
  },
  addUrlValidation() {
    const scriptsRegex = /[\s<>]/;
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w@.-]*).*?\/?$/;
    $.validator.addMethod(
      'validUrl',
      function(value, element) {
        if (value.length === 0) {
          return true;
        }
        return this.optional(element) || (!scriptsRegex.test(value) && urlRegex.test(value));
      },
      'Please enter a valid URL'
    );
  },
  formIsValid() {
    return this.$form.valid();
  },
  selectErrorMessages() {
    $('select').on('change', function() {
      $(this).valid();
    });

    $('select[name="responsiblePartyType"]').on('change', () => {
      $('input[name="bindingParty"]').valid();
    });
  },
  certificationCheckboxMessages() {
    $("input[name='certificationmarkTerms']").on('change', () => {
      $("textarea[name='explanationCertificationTerms']").valid();
    });
  },
  dependentSelectMessages() {
    $('.explanation-wrapper').on('change', function() {
      $(this)
        .find('.explanation-field')
        .find('textarea')
        .valid();
    });
  },
  textAreaMessaging() {
    $('textarea').on('keyup', e => {
      const maxLength = 500;
      const textLength = $(e.currentTarget).val().length;
      if (textLength >= maxLength) {
        $(e.currentTarget)
          .parent()
          .find('#textarea-message')
          .text(`${textLength} characters`)
          .addClass('error-message');
      } else {
        const chars = maxLength - textLength;
        $(e.currentTarget)
          .parent()
          .find('#textarea-message')
          .text(`${chars} characters`)
          .removeClass('error-message');
      }
    });
  },
  init() {
    this.setupDOMElements();
    this.validateForm();
    this.addUrlValidation();
    this.selectErrorMessages();
    this.textAreaMessaging();
    this.certificationCheckboxMessages();
    this.dependentSelectMessages();
  }
};

module.exports = Validations;
