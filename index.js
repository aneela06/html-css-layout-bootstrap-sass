'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');

$(() => {
  setAPIOrigin(location, config);

  // when form is submitted then console log the input
  $("form").on("submit", function(event){
    event.preventDefault();
    let input = $("#name").val();
    console.log(input);
  });
});
