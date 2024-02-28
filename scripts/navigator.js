import { requestRepos } from "./projects.js";
import { bestProjects } from "./home.js";

async function changePage(page) {
    // This abomination is necessary because of the way GitHub Pages handles File Structure/Paths
    // It doesn't work when developing with Live Server
    page = page.toLowerCase();
    const URL = window.location.href;
    const response = await fetch(URL.includes("github") ? `/portfolio/pages/${page}.html` : `pages/${page}.html`);
    
    const content = await response.text();
    document.querySelector("#container").innerHTML = content;
    
    if(page == "home"){
        requestRepos(bestProjects);
    }
}

export { changePage };