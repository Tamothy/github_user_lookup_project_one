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
