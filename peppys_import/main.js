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

   // const mergesData = await fetch('https://api.github.com/repos/' + repo + '/merges');
   // const merges = await mergesData.json();


    //var issuesJSON = JSON.parse(issues);
    //console.log(issuesJSON);

    document.querySelector('#name').innerHTML = `<strong> Name of repository: </strong> ${repoNameData.name}`;
    document.querySelector('#description').innerHTML = `<strong> Description: </strong> ${repoNameData.description}`;
    document.querySelector('#updated').innerHTML = `<strong> Last Updated At: </strong> ${repoNameData.updated_at}`;
    document.querySelector('#subscribers').innerHTML = `<strong> Number of Subscribers: </strong> ${repoNameData.subscribers_count}`;
    document.querySelector('#pulls').innerHTML = `<strong> Pulls: </strong>`;
    document.querySelector('#merges').innerHTML = `<strong> Merges: </strong>`;
    document.querySelector('#totalIssues').innerHTML = `<strong> Number of issues: </strong> ${numb}`;
    }

async function getPullRequest() {

    const repo = document.querySelector('#repo').value;

    const pull= document.querySelector('#pulls').value

    const pullsData = await fetch('https://api.github.com/repos/' + repo + '/pulls?state=all');
    const pulls = await pullsData.json();

    for(i = 0; i < pulls.length; i++)
    {
        document.querySelector('#userLogin').innerHTML = `<strong> User Login: </strong> ${pulls[i].user.login}`;

<<<<<<< HEAD
        if(pulls[i].merged_at == null )
=======
        if(pulls[i].merged_at = 'null' )
>>>>>>> master
        { 
            var ol = document.getElementById("pull");
            var num = document.createElement("li");
            var title = document.createElement("li");
            var userLogin = document.createElement("li");
            var createdAt = document.createElement("li");
            var files = document.createElement("li");
            var merged = document.createElement("li");
            var space = document.createElement("p");
            num.appendChild(document.createTextNode(pulls[i].number));
            title.appendChild(document.createTextNode(pulls[i].title));
            userLogin.appendChild(document.createTextNode(pulls[i].user.login));
            createdAt.appendChild(document.createTextNode(pulls[i].created_at));
            files.appendChild(document.createTextNode(pulls[i].files));
            merged.appendChild(document.createTextNode("This pull request has not yet been merged!"));
            ol.appendChild(num);
            ol.appendChild(title);
            ol.appendChild(userLogin);
            ol.appendChild(createdAt);
            ol.appendChild(files);
            ol.appendChild(merged);
            ol.appendChild(space);

        }else {
            var ol = document.getElementById("pull");
            var num = document.createElement("li");
            var title = document.createElement("li");
            var userLogin = document.createElement("li");
            var createdAt = document.createElement("li");
            var files = document.createElement("li");
            var merged = document.createElement("li");
            var space = document.createElement("p");
            num.appendChild(document.createTextNode(pulls[i].number));
            title.appendChild(document.createTextNode(pulls[i].title));
            userLogin.appendChild(document.createTextNode(pulls[i].user.login));
            createdAt.appendChild(document.createTextNode(pulls[i].created_at));
            files.appendChild(document.createTextNode(pulls[i].files));
            merged.appendChild(document.createTextNode(pulls[i].merged_at));
            ol.appendChild(num);
            ol.appendChild(title);
            ol.appendChild(userLogin);
            ol.appendChild(createdAt);
            ol.appendChild(files);
            ol.appendChild(merged);
            ol.appendChild(space);
        }
    }

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