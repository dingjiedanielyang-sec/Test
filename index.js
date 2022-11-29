
const fetch = require('node-fetch');

async function pullSentryEventsBasedOnIssues(issueID){
    return fetch(url, {
        method: 'GET',
        headers: {
           'Authorization': `Basic ${Buffer.from(jiraUserEmail+':'+jiraAPIToken).toString('base64')}`,
           'Accept': 'application/json'
        }
      })
        .then(response => {
          console.log(
            `Response: ${response.status} ${response.statusText} for ${url}`
          );
          return response.json();
        })
        .catch(err => console.error(err));
}

async function match(){

}

async function createJiraTicket(){

}

  function isValidURL(string) 
        {
            var res = 
            string.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-
            ]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]
            \.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|w
            ww\.[a-zA-Z0-9]+\.[^\s]{2,})/gi);
        return (res !== null);
        };
