
$(document).ready(function() {
  $('.test-front-end').fadeOut(5000);
  $('#github-username').submit(function(event){
    event.preventDefault();
    var usernameInfo = $('#username').val();
    $('#username').val("");
  });
});
