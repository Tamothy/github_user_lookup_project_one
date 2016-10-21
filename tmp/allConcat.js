var GithubExport = require('./../js/back-end-interface.js').githubBackendModule;

$(document).ready(function() {
  //New object
  var githubUser = new GithubExport();
  $('#github-username').submit(function(event){
    event.preventDefault();
    var usernameInfo = $('#username').val();
    $('#username').val("");
    githubUser.getRepos(usernameInfo);
  });
});
