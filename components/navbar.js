import changePage from "./changePage.js"

function navbarCreator(){
    const navBar = document.createElement("nav")
    const h3 = document.createElement("h3")
    h3.innerText = "NKkrisz"

    const ul = document.createElement("ul")
    const navLinks = ["Home", "Projects", "Contact"]
    for(const link of navLinks){
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.innerText = link
        a.href = "#"
        a.onclick = () => changePage(link)
        
        li.appendChild(a)
        ul.appendChild(li)

        const seperate = document.createElement("span")
        seperate.classList.add("seperate")

        ul.appendChild(seperate)
    }

    navBar.appendChild(h3)
    navBar.appendChild(ul)

    document.body.insertBefore(navBar, document.querySelector(".container"))
};

navbarCreator()