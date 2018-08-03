const repo = 'scirocco21/js-ajax-fetch-lab-v-000'

function forkRepo() {
  const learnRepo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('https://api.github.com/repos/${learnRepo}/forks', {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showForkedRepo)
}

function showForkedRepo(res) {
  $('results').html(`<a href="${res.html_url}">${res.full_name}</a>`)
}
function getIssues() {
  fetch('https://api.github.com/repos/${repo}/issues')
  .then(res => res.json())
  .then(showIssues);
}

function showIssues(res) {
  $("#issues").html(res);
}

function createIssue() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  fetch('https://api.github.com/repos/${repo}/issues', {
    method: 'POST',
    title: title,
    body: body,
    headers: {
      Authorization: `token ${getToken()}`
    }
}).then(getIssues);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
