var apiKey = require('./../.env').apiKey;

function GithubExport() {
}

GithubExport.prototype.getRepos = function(nameInput){
  $.get('https://api.github.com/users/' + nameInput + '?access_token=' + apiKey).then(function(response){
    debugger;
    $('#gh-user-pic').empty();
    $('#gh-user-pic').append('<img src=' + response.avatar_url + '>');
    $('#gh-username').empty();
    $('#gh-username').append('<h2 class="login">Username: <span class="style">' + response.login + '</span></h2>');
    $('#gh-fullname').empty();
    $('#gh-fullname').append('<h6 class="name">Name: <span class="style">' + response.name + '</span></h5>');
    $('#gh-user-url').empty();
    $('#gh-user-url').append('<h6 class="url">GitHub URL: <span class="style"><a class="link" href="' + response.html_url + '"' + 'target=_"blank">' + response.html_url + '</span></h6>');
    $('#gh-repository-count').empty();
    $('#gh-repository-count').append('<h6 class="repos-count">Total Public Repositories: <span class="style">' + response.public_repos + '</span></h6>');
  }).fail(function(error){
    alert("GitHub username invalid, try again!");
  });
};

exports.githubBackendModule = GithubExport;

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
