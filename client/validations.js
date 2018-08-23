const Validations = {
  scriptsRegex: /[\s<>]/,
  urlRegex: /^(http|https):\/\/?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\@ \.-]*).*?\/?$/,
  setupDOMElements() {
    this.$form = $('form');
  },
  validateForm() {
    $.validator.addMethod(
      'checkCreatedUrls',
      (value, element) => {
        const elName = element.name;
        const urlPair = $(`input[name="${elName}"]`);
        const titleIsValid = urlPair[0].value.length > 0;
        console.log('titleIsValid', titleIsValid);
        const urlIsValid =
          !Validations.scriptsRegex.test(urlPair[1].value) && Validations.urlRegex.test(urlPair[1].value);
        console.log('urlIsValid', urlIsValid);
        console.log('not a script', !Validations.scriptsRegex.test(urlPair[1].value));
        console.log('is valid url', Validations.urlRegex.test(urlPair[1].value));
        if (titleIsValid && urlIsValid) {
          return true;
        }
        return false;
      },
      $.validator.format('Citations must have a title and valid url.')
    );
    this.$form.validate({
      rules: {
        ignore: ['.ignore'],
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
        'citations[]': {
          checkCreatedUrls: true,
          url: true,
          validUrl: true,
          required: false
        },
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
        certificationMarkTerms: {},
        explanationCertificationTerms: {
          required: {
            depends() {
              const numTerms = $("input[name='certificationMarkTerms']").length;
              const numSelected = $("input[name='certificationMarkTerms']:checked").length;
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
        primaryType: {
          required:
            'You must select a project type. If your project doesn\'t fall into any of these types, select "Other".'
        },
        additionalType: {},
        projectKeywords: {},
        documentationUrl: {},
        availableFileFormat: {},
        citations: {},
        hardwareLicense: { required: 'You must select a license. If your license is not listed, select "Other"' },
        softwareLicense: {
          required:
            'You must select a license. If your license is not listed, select "Other". If your project doesn\'t use software, select "No software".'
        },
        documentationLicense: { required: 'You must select a license. If your license is not listed, select "Other"' },
        noCommercialRestriction: {},
        explanationNcr: { required: 'This explanation is required if you answered no.' },
        noDocumentationRestriction: {},
        explanationNdr: { required: 'This explanation is required if you answered no.' },
        openHardwareComponents: {},
        explanationOhwc: { required: 'This explanation is required if you answered no.' },
        creatorContribution: {},
        explanationCcr: { required: 'This explanation is required if you answered no.' },
        noUseRestriction: {},
        explanationNur: { required: 'This explanation is required if you answered no.' },
        redistributedWork: {},
        explanationRwr: { required: 'This explanation is required if you answered no.' },
        noSpecificProduct: {},
        explanationNsp: { required: 'This explanation is required if you answered no.' },
        noComponentRestriction: {},
        explanationNor: { required: 'This explanation is required if you answered no.' },
        technologyNeutral: {},
        explanationTn: { required: 'This explanation is required if you answered no.' },
        certificationmarkTerms: {},
        explanationCertificationTerms: {
          required: 'This explanation is required if you did not agree to one or more of the above terms.'
        },
        relationship: {},
        agreementTerms: {
          required:
            'You must agree to the terms of the OSHWA Open Source Hardware Certification Mark License Agreement.'
        },
        parentName: {},
        certificationDate: { required: '' }
      },
      errorPlacement: (error, element) => {
        if (element[0].tagName === 'SELECT') {
          error.insertAfter(element.parent());
        } else if (element.attr('name') === 'agreementTerms') {
          error.insertAfter(element.parent().parent());
        } else if (element.hasClass('url_create')) {
          error.appendTo(element.parent().find('.citation-error'));
        } else {
          error.insertAfter(element);
        }
      }
    });
  },
  addUrlValidation() {
    $.validator.addMethod(
      'validUrl',
      function(value, element) {
        if (value.length === 0) {
          return true;
        }
        return this.optional(element) || (!Validations.scriptsRegex.test(value) && Validations.urlRegex.test(value));
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
  urlCitationMessages() {
    // on field creation, add rules
    $('body').on('change', '.url_create', () => {
      $('.url_create').each((idx, input) => {
        $(input).rules('add', { checkCreatedUrls: true });
        $(input).valid();
      });
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
          .find('.textarea-message')
          .text(`${textLength - maxLength} characters over suggested length`)
          .addClass('error-message');
      } else {
        const chars = maxLength - textLength;
        $(e.currentTarget)
          .parent()
          .find('.textarea-message')
          .text(`${chars} characters left`)
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
    this.urlCitationMessages();
  }
};

module.exports = Validations;
