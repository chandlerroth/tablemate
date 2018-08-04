tablemate
=========

Tablemate is a friendly jQuery plugin that allows you to animate your tables! Unfortunately the core jQuery library doesn't allow for you animate your tables because of limiting factors from the DOM. Tablemate is a hack that wraps a div (class of `.tablemate_proc`) around your `td` contents. Then, it majestically animates your `tr`'s like you'd expect!

>⚠️ Notice: This plugin is not receiving maintainance, and has not been tested with the latest version of jQuery

Installation
------------

1. Download `tablemate.min.jquery.js`
2. (Important) Make sure jQuery is accessable by tablemate!
3. Include tablemate in the `<head>` of your HTML document. Example: `<script src="tablemate.min.jquery.js"></script>`
4. You're ready to roll!

Usage
-----

In short, tablemate captures the existing definition around `.slideDown` (and friends) and uses jQuery-like durations.

`duration` values:

1. `slow` is `600` milliseconds
2. `fast` is `200` milliseconds
3. When nothing is provided, `duration` defaults to `400` milliseconds
4. Custom numeric `duration` value will be translated to time in milliseconds

### .tableToggle()

Toggle slide table row visibility.

`.tableToggle(duration, callback)`

### .tableDown()

Slide table row down to make it visible.

`.tableDown(duration, callback)`

### .tableUp()

Slide visible table row up to make it invisible.

`.tableUp(duration, callback)`

Example
-------

HTML

    <a href="#" class="toggle">toggle</a>

    <table>
      <tr class="row">
        <td>Data 1
        </td>
        <td>Data 2
        </td>
      </tr>

      <tr class="row-details">
        <td>Detail Data 1
        </td>
        <td>Detail Data 2
        </td>
      </tr>
    </table>

jQuery

    $('.toggle').click(function() {
      $('.row-details').tableToggle();
    });
