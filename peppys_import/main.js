async function getUserData() {

    const repo = document.querySelector('#repo').value

    const repoName = await fetch('https://api.github.com/repos/' + repo);
    const repoNameData = await repoName.json();

    const pullsData = await fetch('https://api.github.com/repos/' + repo + '/pulls?state=all');
    const pulls = await pullsData.json();

    for(i = 0; i < pulls.length; i++)
    {
        var ul = document.getElementById("pullRequests");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(pulls[i].title));
            ul.appendChild(li);

            numb = pulls.length;
    }

    document.querySelector('#name').innerHTML = `<strong> Name of repository: </strong> ${repoNameData.name}`;
    document.querySelector('#description').innerHTML = `<strong> Description: </strong> ${repoNameData.description}`;
    document.querySelector('#updated').innerHTML = `<strong> Last Updated At: </strong> ${repoNameData.updated_at}`;
    document.querySelector('#subscribers').innerHTML = `<strong> Number of Subscribers: </strong> ${repoNameData.subscribers_count}`;
    document.querySelector('#pulls').innerHTML = `<strong> Pulls: </strong> ${pulls[i]}`;
    document.querySelector('#totalIssues').innerHTML = `<strong> Number of issues: </strong> ${numb}`;
    }

async function getPullRequest() {

    const repo = document.querySelector('#repo').value;

    const pullsData = await fetch('https://api.github.com/repos/' + repo + '/pulls?state=all');
    const pulls = await pullsData.json();

    for(i = 0; i < pulls.length; i++)
    {
        if(pulls[i].merged_at == null )
        { 
            var ol = document.getElementById("pull");
            var att = document.createElement("li");
            var space = document.createElement("p");
            att.appendChild(document.createTextNode(pulls[i].number + "," + " " +  pulls[i].title + "," + " " + pulls[i].user.login + "," + " " +  pulls[i].closed_at + "," + " " + pulls[i].files + "," + " " + "This pull request has not yet been merged!"));
            ol.appendChild(att);
            ol.appendChild(space);

        } else if(pulls[i].closed_at == null )
        { 
            var ol = document.getElementById("pull");
            var att = document.createElement("li");
            var space = document.createElement("p");
            att.appendChild(document.createTextNode(pulls[i].number + "," + " " +  pulls[i].title + "," + " " + pulls[i].user.login + "," + " " + "This pull request has not yet been closed!" + "," + " " + pulls[i].files + "," + " " + pulls[i].merged_at));
            ol.appendChild(att);
            ol.appendChild(space);
        } else
        {
            var ol = document.getElementById("pull");
            //var title = document.createElement("li");
            var att = document.createElement("li");
            var space = document.createElement("p");
           // title.appendChild(document.createTextNode("Number: " + "Title: " + "User Login: " + "Closed At: " + "Merged: "));
            att.appendChild(document.createTextNode(pulls[i].number + "," + " " +  pulls[i].title + "," + " " + pulls[i].user.login + "," + " " +  pulls[i].closed_at + "," + " " + pulls[i].files + "," + " " + pulls[i].merged_at));
           // ol.appendChild(title);
            ol.appendChild(att);
            ol.appendChild(space);
        }
    }

}
/*
window.addEventListener('DOMContentLoaded', () => {
    getUserData();
}); */