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
