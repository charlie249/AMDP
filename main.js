async function getUserData() {

    var issueNumb = prompt("Please enter the number of the issue you would like to view information about: ");

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
    }

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