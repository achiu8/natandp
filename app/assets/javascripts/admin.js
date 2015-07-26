$(function() {
  var allGuests = $('.admin-guest');

  function filterAttending(e) {
    var $target = $(e.currentTarget);
    var filter = $target.find('option:selected').val();
    if (filter == 'any') {
      allGuests.removeClass('admin-guest-hidden');
    } else {
      allGuests.addClass('admin-guest-hidden');
      $('.attending-' + filter).removeClass('admin-guest-hidden');
      if (filter == 'saratoga_springs' || filter == 'thailand') {
        $('.attending-both').removeClass('admin-guest-hidden');
      }
    }
  }

  function listen() {
    $('.attending-select').on('change', filterAttending.bind(this));
  }

  listen();
});
