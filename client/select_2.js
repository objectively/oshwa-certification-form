const Select2 = {
  previousVersions() {
    $('.previousVersions').select2({
      multiple: true,
      width: '100%'
      // minimumInputLength: 3
    });
  },
  init() {
    this.previousVersions();
  }
};

module.exports = Select2;
