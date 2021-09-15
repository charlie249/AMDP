async function getUserData() {

    const repo = document.querySelector('#repo').value

    const repoName = await fetch('https://api.github.com/repos/' + repo);
    const repoNameData = await repoName.json();
    console.log(repoNameData);

    document.querySelector('#name').innerHTML = `<strong> Name of repository: </strong> ${repoNameData.name}`;
    document.querySelector('#description').innerHTML = `<strong> Description: </strong> ${repoNameData.description}`;
    document.querySelector('#updated').innerHTML = `<strong> Last Updated At: </strong> ${repoNameData.updated_at}`;
    document.querySelector('#subscribers').innerHTML = `<strong> Number of Subscribers: </strong> ${repoNameData.subscribers_count}`;
    document.querySelector('#openIssues').innerHTML = `<strong> Number of open issues: </strong> ${repoNameData.open_issues_count}`;
    document.querySelector('#issues').innerHTML = `<strong> Issues: </strong> ${repoNameData.issues_url}`;
    }

async function userIssue(){
    console.log('in my')
   // const repo = document.querySelector('#repo').value
   // const issue = document.querySelector('#issue').value
    
    const issue = await fetch('https://api.github.com/repos/' + repo + '/issues/' + issue);
    const issueData = await issue.json();

    document.querySelector('#name').innerHTML = `<strong> Name of repository: </strong> ${issueData.title}`;


    /*
    const date1 = new Date(issueData.created_at);
    const date2 = new Date(issueData.closed_at);

    if (issueData.closed_at != null){
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 *24));
        document.querySelector('#days').innerHTML = `<strong> Length of time the issue was open: </strong> ${diffDays} days`; 
    }
    else {
        document.querySelector('#days').innerHTML = `<strong> This issue has not been closed yet </strong>`;
     } */

}

window.addEventListener('DOMContentLoaded', () => {
    getUserData();
});