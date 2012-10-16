tablemate
=========

Tablemate is a friendly jQuery plugin that allows you to animate your tables!

The .slideDown() method animates the height of the matched elements. This causes lower parts of the page to slide down, making way for the revealed items.

Durations are given in milliseconds; higher values indicate slower animations, not faster ones. The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds, respectively. If any other string is supplied, or if the duration parameter is omitted, the default duration of 400 milliseconds is used.

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