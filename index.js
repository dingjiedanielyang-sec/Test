
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

    

