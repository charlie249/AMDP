async function getUserData() {

    const repo = document.querySelector('#repo').value

    const repoName = await fetch('https://api.github.com/repos/' + repo);
    const repoNameData = await repoName.json();

    const issuesData = await fetch('https://api.github.com/repos/' + repo + '/issues');
    const issues = await issuesData.json();

    for(i = 0; i < issues.length; i++)
    {
        console.log(issues[i].title);
        console.log(issues.length);


        var ul = document.getElementById("issues");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(issues[i].title));
        ul.appendChild(li);

        numb = issues.length;
        }

    //var issuesJSON = JSON.parse(issues);
    //console.log(issuesJSON);

    document.querySelector('#name').innerHTML = `<strong> Name of repository: </strong> ${repoNameData.name}`;
    document.querySelector('#description').innerHTML = `<strong> Description: </strong> ${repoNameData.description}`;
    document.querySelector('#updated').innerHTML = `<strong> Last Updated At: </strong> ${repoNameData.updated_at}`;
    document.querySelector('#subscribers').innerHTML = `<strong> Number of Subscribers: </strong> ${repoNameData.subscribers_count}`;
    document.querySelector('#issue').innerHTML = `<strong> Issues: </strong>`;
    document.querySelector('#openIssues').innerHTML = `<strong> Number of open issues: </strong> ${repoNameData.open_issues_count}`;
    document.querySelector('#totalIssues').innerHTML = `<strong> Number of issues: </strong> ${numb}`;
    }

async function userIssue(){
    console.log('in my')
    const repo = document.querySelector('#repo').value
    const issue = document.querySelector('#issue').value
    
    const issueID = await fetch('https://api.github.com/repos/' + repo + '/issues/' + issue);
    const issueData = await issueID.json();

    document.querySelector('#title').innerHTML = `<strong> Name of repository: </strong> ${issueData.title}`;
    document.querySelector('#id').innerHTML = `<strong> ID: </strong> ${issueData.id}`;
    document.querySelector('#number').innerHTML = `<strong> Issue Number: </strong> ${issueData.number}`;
    document.querySelector('#state').innerHTML = `<strong> State: </strong> ${issueData.state}`;
    document.querySelector('#created').innerHTML = `<strong> Created at: </strong> ${issueData.created_at}`;
    document.querySelector('#closed').innerHTML = `<strong> Closed at: </strong> ${issueData.closed_at}`;

    const date1 = new Date(issueData.created_at);
    const date2 = new Date(issueData.closed_at);

    if (issueData.closed_at != null){
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 *24));
        document.querySelector('#days').innerHTML = `<strong> This issue was open for: </strong> ${diffDays} days`; 
    }
    else {
        document.querySelector('#days').innerHTML = `<strong> This issue has not been closed yet </strong>`;
     } 
}

window.addEventListener('DOMContentLoaded', () => {
    getUserData();
});