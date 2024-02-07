import { requestRepos } from "../functions/home.js";

const pages = {
    "home": {
        "html" : "../pages/home.html",
        "js" : requestRepos, // Call the function directly here
    },
    "projects": {
        "html" : "../pages/projects.html",
        "js" : null, // No function associated with this page
    },
    "contact": {
        "html" : "../pages/contact.html",
        "js" : null, // No function associated with this page
    }
}

function changePage(page) {
    page = page.toLowerCase();
    fetch(pages[page]["html"])
    .then(response => response.text())
    .then(data => {
        document.body.querySelector(".container").innerHTML = data;
        if (pages[page]["js"]) {
            pages[page]["js"](); // Call the associated function if it exists
        }
    });
}

changePage("home");

export default changePage;
