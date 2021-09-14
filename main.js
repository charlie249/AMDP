async function getUserData() {

    /*var repoName = prompt("Please enter the name of the repository you would like to view information about: ");
    const name = await fetch('https://api.github.com/repos' + repoName);

    //console.log(issueNumb); 
    //document.getElementById('issue_numb').innerHTML;
    //var issueNumb = prompt("Please enter the number of the issue you would like to view information about: ");

    const issue = await fetch('https://api.github.com/repos/serge-web/serge/issues/' + issueNumb);
    const issueData = await issue.json();
    document.querySelector('#title').innerHTML = `<strong> Issue Title: </strong> ${issueData.title}`;
    document.querySelector('#id').innerHTML = `<strong> ID: </strong> ${issueData.id} `;
    document.querySelector('#number').innerHTML = `<strong> Number: </strong> ${issueData.number}`;
    document.querySelector('#state').innerHTML = `<strong> State: </strong> ${issueData.state}`;   
    document.querySelector('#created').innerHTML = `<strong> Created at: </strong> ${issueData.created_at}`;
    document.querySelector('#closed').innerHTML = `<strong> Closed at: </strong> ${issueData.closed_at}`; 

    const date1 = new Date(issueData.created_at);
    const date2 = new Date(issueData.closed_at);

    if (issueData.closed_at != null){
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 *24));
        document.querySelector('#days').innerHTML = `<strong> Length of time the issue was open: </strong> ${diffDays} days`; 
    }
    else {
        document.querySelector('#days').innerHTML = `<strong> This issue has not been closed yet </strong>`;
    }*/

}

async function repoName(){

    var userInput = prompt("Please enter the name of the repository you would like to view information about: ");
    const repoName = await fetch('https://api.github.com/repos/serge-web/' + userInput);
    const repoNameData = await repoName.json();
    console.log(repoNameData);

    document.querySelector('#trial').innerHTML = `<strong> Issues: </strong> ${repoNameData.issues_urls}`;


    /* const date1 = new Date(repoNameData.created_at);
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

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

async function myFunction(){
    const issue = await fetch('https://api.github.com/repos/serge-web/serge/issues/' + getUserData.issueNumb);
    const issueData = await issue.json();
    const date1 = new Date(issueData.created_at);
    const date2 = new Date(issueData.closed_at);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 *24));
    console.log(diffDays);

}

window.addEventListener('DOMContentLoaded', () => {
    getUserData();
});