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
            var num = document.createElement("li");
            var title = document.createElement("li");
            var userLogin = document.createElement("li");
            var closedAt = document.createElement("li");
            var files = document.createElement("li");
            var merged = document.createElement("li");
            var space = document.createElement("p");
            num.appendChild(document.createTextNode(pulls[i].number));
            title.appendChild(document.createTextNode(pulls[i].title));
            userLogin.appendChild(document.createTextNode(pulls[i].user.login));
            closedAt.appendChild(document.createTextNode(pulls[i].closed_at));
            files.appendChild(document.createTextNode(pulls[i].files));
            merged.appendChild(document.createTextNode("This pull request has not yet been merged!"));
            ol.appendChild(num);
            ol.appendChild(title);
            ol.appendChild(userLogin);
            ol.appendChild(closedAt);
            ol.appendChild(files);
            ol.appendChild(merged);
            ol.appendChild(space);

        } else{
            var ol = document.getElementById("pull");
            var num = document.createElement("li");
            var title = document.createElement("li");
            var userLogin = document.createElement("li");
            var closedAt = document.createElement("li");
            var files = document.createElement("li");
            var merged = document.createElement("li");
            var space = document.createElement("p");
            num.appendChild(document.createTextNode(pulls[i].number));
            title.appendChild(document.createTextNode(pulls[i].title));
            userLogin.appendChild(document.createTextNode(pulls[i].user.login));
            closedAt.appendChild(document.createTextNode(pulls[i].closed_at));
            files.appendChild(document.createTextNode(pulls[i].files));
            merged.appendChild(document.createTextNode(pulls[i].merged_at));
            ol.appendChild(num);
            ol.appendChild(title);
            ol.appendChild(userLogin);
            ol.appendChild(closedAt);
            ol.appendChild(files);
            ol.appendChild(merged);
            ol.appendChild(space);
        }

        if(pulls[i].closed_at == null )
        { 
            var ol = document.getElementById("pull");
            var num = document.createElement("li");
            var title = document.createElement("li");
            var userLogin = document.createElement("li");
            var closedAt = document.createElement("li");
            var files = document.createElement("li");
            var merged = document.createElement("li");
            var space = document.createElement("p");
            num.appendChild(document.createTextNode(pulls[i].number));
            title.appendChild(document.createTextNode(pulls[i].title));
            userLogin.appendChild(document.createTextNode(pulls[i].user.login));
            closedAt.appendChild(document.createTextNode("This pull request has not yet been merged!"));
            files.appendChild(document.createTextNode(pulls[i].files));
            merged.appendChild(document.createTextNode(pulls[i].merged_at));
            ol.appendChild(num);
            ol.appendChild(title);
            ol.appendChild(userLogin);
            ol.appendChild(closedAt);
            ol.appendChild(files);
            ol.appendChild(merged);
            ol.appendChild(space);

        } else{
            var ol = document.getElementById("pull");
            var num = document.createElement("li");
            var title = document.createElement("li");
            var userLogin = document.createElement("li");
            var closedAt = document.createElement("li");
            var files = document.createElement("li");
            var merged = document.createElement("li");
            var space = document.createElement("p");
            num.appendChild(document.createTextNode(pulls[i].number));
            title.appendChild(document.createTextNode(pulls[i].title));
            userLogin.appendChild(document.createTextNode(pulls[i].user.login));
            closedAt.appendChild(document.createTextNode(pulls[i].closed_at));
            files.appendChild(document.createTextNode(pulls[i].files));
            merged.appendChild(document.createTextNode(pulls[i].merged_at));
            ol.appendChild(num);
            ol.appendChild(title);
            ol.appendChild(userLogin);
            ol.appendChild(closedAt);
            ol.appendChild(files);
            ol.appendChild(merged);
            ol.appendChild(space);
        }
    }

}
/*
window.addEventListener('DOMContentLoaded', () => {
    getUserData();
}); */