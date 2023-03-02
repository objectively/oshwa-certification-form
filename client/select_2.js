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
    // allow select on enter 
    $('select2-search-field > input.select2-input').on('keyup', function(e) {
      if (e.keyCode === 13) addToList($(this).val());
    });
  }
};

module.exports = Select2;
