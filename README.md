tablemate
=========

Tablemate is a friendly jQuery plugin that allows you to animate your tables! Unfortunately jQuery doesn't allow for you animate your tables because of limiting factors from the DOM. Tablemate is a hack that wraps a div (class of `.tablemate_proc`) around your `td` contents. Then, it magestically animates your `tr`'s like you'd expect!


Installation
------------

1. Download `tablemate.min.jquery.js`
2. (Important) Make sure jQuery is accessable by tablemate!
3. Include tablemate in the `<head>` of your HTML document. Example: `<script src="tablemate.min.jquery.js"></script>`
4. You're ready to roll!

Usage
-----

In short, tablemate captures the existing definition around `.slideDown` (and friends) and uses jQuery-like durations.

Duration values:

1. `slow` = `600` milliseconds
2. `fast` = `200` milliseconds
3. When nothing is provided, duration defaults to `400` milliseconds
4. Custom numeric value will be translated to time in milliseconds

###.tableToggle()

Toggle slide table row visibility.

`.tableToggle(duration)`

###.tableDown()

Slide table row down to make it visible.

`.tableDown(duration)`

###.tableUp()

Slide visible table row up to make it invisible.

`.tableUp(duration)`

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