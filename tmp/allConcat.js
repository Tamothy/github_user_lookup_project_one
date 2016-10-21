var GithubExport = require('./../js/github.js').githubBackendModule;

$(document).ready(function() {
  //New object
  var githubUser = new GithubExport();
  $("#github-username").submit(function(event){
    event.preventDefault();
    $('#gh-user-pic').empty();
    $('#gh-username').empty();
    $('#gh-fullname').empty();
    $('#gh-user-url').empty();
    $('#gh-repository-count').empty();
    $("#results").empty();
    var userNameInput = $('#username').val();
    $("#username").val("");
    $("#hide").show();
    githubUser.userNameInfo(userNameInput);
    githubUser.getRepos(userNameInput);
  });
});
