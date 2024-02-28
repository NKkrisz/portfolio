async function changePage(page) {
    page = page.toLowerCase();
    const response = await fetch(`pages/${page}.html`);
    const content = await response.text();
    document.querySelector("#container").innerHTML = content;
}