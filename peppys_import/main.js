async function getUserData() {

    const repo = document.querySelector('#repo').value

    const repoName = await fetch('https://api.github.com/repos/' + repo);
    const repoNameData = await repoName.json();

    const pullsData = await fetch('https://api.github.com/repos/' + repo + '/pulls');
    const pulls = await pullsData.json();

    for(i = 0; i < pulls.length; i++)
    {
        var ul = document.getElementById("pullRequests");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(pulls[i].title));
            ul.appendChild(li);

            numb = pulls.length;
    }

    //var issuesJSON = JSON.parse(issues);
    //console.log(issuesJSON);

    document.querySelector('#name').innerHTML = `<strong> Name of repository: </strong> ${repoNameData.name}`;
   document.querySelector('#description').innerHTML = `<strong> Description: </strong> ${repoNameData.merged}`;
    document.querySelector('#updated').innerHTML = `<strong> Last Updated At: </strong> ${repoNameData.updated_at}`;
    document.querySelector('#subscribers').innerHTML = `<strong> Number of Subscribers: </strong> ${repoNameData.subscribers_count}`;
    document.querySelector('#pulls').innerHTML = `<strong> Pulls: </strong>`;
    document.querySelector('#openIssues').innerHTML = `<strong> Number of open issues: </strong> ${repoNameData.open_issues_count}`;
    document.querySelector('#totalIssues').innerHTML = `<strong> Number of issues: </strong> ${numb}`;
    }

/*
    console.log('in my')
    const repo = document.querySelector('#repo').value
    const issue = document.querySelector('#issue').value

    const date1 = new Date(issueData.created_at);
    const date2 = new Date(issueData.closed_at);

    if (issueData.closed_at != null){
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 *24));
        document.querySelector('#days').innerHTML = `<strong> This issue was open for: </strong> ${diffDays} days`; 
    }

window.addEventListener('DOMContentLoaded', () => {
    getUserData();
}); */