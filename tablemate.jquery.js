(function( $ ) {
  function wrapping() {
    if (columns.has('div.tablemate_proc').length == 0) {
      columns.wrapInner('<div class="tablemate_proc"></div>');
    }
  }

  function vars() {
    row             = $(this).closest('tr');
    columns         = $(row).children('td');
    style           = columns.attr('style');
    padding_top     = columns.css('padding-top');
    padding_bottom  = columns.css('padding-bottom');
    duration        = duration / 2;
    visible         = $(row).is(":visible");
  }

  $.fn.tableDown = function(duration) {
    vars();

    if (!visible) {
      columns.css('padding-top', '0');
      columns.css('padding-bottom', '0');

      wrapping();

      columns.children('div.tablemate_proc').hide();

      row.show();

      columns.animate({
        paddingTop: padding_top,
        paddingBottom: padding_bottom
      }, duration);

      columns.children('div.tablemate_proc').slideDown(duration, function() {
        contents = $(this).contents();
        $(this).replaceWith(contents);
      });
    }
  }

  $.fn.tableUp = function(duration) {
    vars();

    if (visible) {
      wrapping();

      columns.animate({
        paddingTop: '0',
        paddingBottom: '0'
      }, duration);

      columns.children('div.tablemate_proc').slideUp(duration, function() {
        contents = $(this).contents();
        $(this).replaceWith(contents);

        row.hide()
      });

    }
  }

  $.fn.tableToggle = function(duration) {
    row = $(this).closest('tr');
    visible = $(row).is(":visible");

    if (visible) {
      this.tableUp(duration);
    }

    else {
      this.tableDown(duration);
    }
  };
})( jQuery );
