(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "1151ec588b6c014c73e018dcdb41b4478961d766";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function GithubExport() {
}

GithubExport.prototype.getRepos = function(nameInput){
  $.get('https://api.github.com/users/' + nameInput + '?access_token=' + apiKey).then(function(response){
    debugger;
    $('#gh-user-pic').empty();
    $('#gh-user-pic').append('<img src=' + response.avatar_url + '>');
    $('#gh-username').empty();
    $('#gh-username').append('<h3 class="login">Username: <span class="style">' + response.login + '</span></h3>');
    $('#gh-fullname').empty();
    $('#gh-fullname').append('<h3 class="name">Name: <span class="style">' + response.name + '</span></h3>');
    $('#gh-user-url').empty();
    $('#gh-user-url').append('<h3 class="url">GitHub URL: <span class="style"><a class="link" href="' + response.html_url + '"' + 'target=_"blank">' + response.html_url + '</span></h3>');
    $('#gh-repository-count').empty();
    $('#gh-repository-count').append('<h3 class="count">Total Public Repositories: <span class="style">' + response.public_repos + '</span></h3>');
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.githubBackendModule = GithubExport;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/back-end-interface.js":2}]},{},[3]);
