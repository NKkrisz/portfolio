function footerCreator(){
    const footerHTML = `
        <footer>
            <div>
                <p>You can find me here too:</p>
                    <ul>
                        <li><a href="https://github.com/NKkrisz"><img src="img/icons/github.svg" alt="Github"></a></li>
                        <li><a href="https://www.reddit.com/user/NKkrisz"><img src="img/icons/reddit.svg" alt="Reddit"></a></li>
                        <li><a href="https://x.com/nkkrisz"><img src="img/icons/x.svg" alt="X"></a></li>
                    </ul>
            </div>
            <p>Icons made by: <a href="https://icons8.com/">Icons8</a></p>
        </footer>
    `
    
    document.body.innerHTML += footerHTML
}

footerCreator()