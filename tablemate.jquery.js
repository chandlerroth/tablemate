//! Tablemate v0.0.3 (Copyright Chandler Roth 2012) https://github.com/munchin/tablemate

(function( $ ) {
  function wrapping() {
    if (columns.has('div.tablemate_proc').length == 0) {
      columns.wrapInner('<div class="tablemate_proc"></div>');
    }
  }

  function compute(duration) {
    if (duration == 'slow') {
      return 600;
    } else if (duration == 'fast') {
      return 200;
    } else if (duration == "" || isNaN(duration) || duration === undefined) {
      return 400;
    } else {
      return duration;
    }
  }

  function think(duration, callback) {
   if (typeof duration == 'function') {
      return duration;
    } else {
      return callback;
    }
  }

  $.fn.tableDown = function(duration, callback) {
    callback = think(duration, callback);
    duration = compute(duration);

    row             = $(this).closest('tr');
    columns         = $(row).children('td');
    padding_top     = columns.css('padding-top');
    padding_bottom  = columns.css('padding-bottom');
    duration        = duration / 2;
    visible         = $(row).is(":visible");

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

        // FIXME multiple callbacks!
        if (typeof callback == 'function') {
          callback.call(this);
        }
      });
    }
  }

  $.fn.tableUp = function(duration, callback) {
    callback = think(duration, callback);
    duration = compute(duration);

    row             = $(this).closest('tr');
    columns         = $(row).children('td');
    padding_top     = columns.css('padding-top');
    padding_bottom  = columns.css('padding-bottom');
    duration        = duration / 2;
    visible         = $(row).is(":visible");

    if (visible) {
      wrapping();

      columns.animate({
        paddingTop: '0',
        paddingBottom: '0'
      }, duration, function() {
        columns.css('padding-top', '');
        columns.css('padding-bottom', '');
      });

      columns.children('div.tablemate_proc').slideUp(duration, function() {
        contents = $(this).contents();
        $(this).replaceWith(contents);

        row.hide()

        // FIXME multiple callbacks!
        if (typeof callback == 'function') {
          callback.call(this);
        }
      });
    }
  }

  $.fn.tableToggle = function(duration, callback) {
    row = $(this).closest('tr');
    visible = $(row).is(":visible");

    if (visible) {
      this.tableUp(duration, callback);
    } else {
      this.tableDown(duration, callback);
    }
  };
})( jQuery );
