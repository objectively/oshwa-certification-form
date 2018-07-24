const Select2 = {
  previousVersions() {
    $('.previousVersions').select2({
      placeholder: 'Enter an existing OSHWA UID',
      multiple: true
    });
  },
  init() {
    this.previousVersions();
  }
};

module.exports = Select2;
