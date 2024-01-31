async function requestRepos() {
    const response = await fetch(`https://api.github.com/users/nkkrisz/repos`);
    const repos = await response.json();

    for (let repo of repos) {
        //Skip forks for now...
        if(repo.fork == true) continue;

        const li = document.createElement('li');
        const a = document.createElement('a');

        if(repo.has_pages == true){
            a.href = `https://nkkrisz.github.io/${repo.name}/`;
            a.innerText = repo.name;
            a.target = "_blank"
            li.appendChild(a);
            document.querySelector("#web_projects").appendChild(li);
            
            web_projects[repo.name] = repo;
            
            li.addEventListener("mouseover", () => {
                document.querySelector("#preview").src = `img/projects/${repo.name}.png`
            });

        } else {
            a.href = repo.html_url;
            a.innerText = repo.name;
            a.target = "_blank"
            li.appendChild(a);
            document.querySelector("#other_projects").appendChild(li);
            
            other_projects[repo.name] = repo;
        }
        

        // console.log(repo);
    };
};

web_projects = {}
other_projects = {}

requestRepos();