// js/dashboard_main.js

import $ from 'jquery'
import _ from 'lodash'
import '../css/main.css' // Import the main.css file

$('body').append('<div id="logo"></div>')
$('body').append('<button>Click here to get started</button>')
$('body').append('<p id="count"></p>')
$('body').append('<p>Copyright - Holberton School</p>')

function updateCounter() {
  const count = $('#count').text() || 0
  $('#count').text(`${parseInt(count) + 1} clicks on the button`)
}

$('button').on('click', _.debounce(updateCounter, 500))
