(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "8d97a7425104b3db37c13c1a293b3323cb16908a";

},{}],2:[function(require,module,exports){
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

},{"./../js/github.js":3}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function GithubExport() {
}

GithubExport.prototype.userNameInfo = function(nameInput){
  $.get('https://api.github.com/users/' + nameInput + '?access_token=' + apiKey).then(function(response){
    $('#gh-user-pic').append('<img src=' + response.avatar_url + '>');
    $('#gh-username').append(response.login);
    //if actual name is null then set as not available
    if(response.name === null) {
      response.name = "Not available";
      $('#gh-fullname').append('Name: ' + response.name);
    } else {
      $('#gh-fullname').append('Name: ' + response.name);
    }
    $('#gh-user-url').append('GitHub URL: <a class="link" href="' + response.html_url + '"' + 'target=_"blank">' + response.html_url);
    $('#gh-repository-count').append('Total Public Repositories: ' + response.public_repos);
  }).fail(function(error){
    alert("GitHub username invalid, try again!");
  });
};


GithubExport.prototype.getRepos = function(nameInput) {
  $.get('https://api.github.com/users/' + nameInput + '/repos?access_token=' + apiKey).then(function(response) {
    for (var i = 0; i < response.length; i++) {
      if(response[i].description === null) {
        //Set description to unavailable
        response[i].description = "Not available";
        $("#results").append('<li>Name: ' + response[i].name + ' || Description: ' + response[i].description + '</li>');
      } else {
        //If not null then provide description
        $("#results").append('<li>Name: ' + response[i].name + ' || Description: ' + response[i].description + '</li>');
      }
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubBackendModule = GithubExport;

},{"./../.env":1}]},{},[2]);
