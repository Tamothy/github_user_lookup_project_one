var apiKey = require('./../.env').apiKey;

function GithubExport() {
}

GithubExport.prototype.getRepos = function(nameInput){
  $.get('https://api.github.com/users/' + nameInput + '?access_token=' + apiKey).then(function(response){
    debugger;
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubBackendModule = GithubExport;

var GithubExport = require('./../js/back-end-interface.js').githubBackendModule;

$(document).ready(function() {
  $('.test-front-end').fadeOut(5000);
  //New object
  var githubUser = new GithubExport();
  $('#github-username').submit(function(event){
    event.preventDefault();
    var usernameInfo = $('#username').val();
    $('#username').val("");
    githubUser.getRepos(usernameInfo);
  });
});
