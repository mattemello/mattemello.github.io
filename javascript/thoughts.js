function init() {
    document.getElementById("navbar").innerHTML = navbar;
    document.getElementById("ablog").setAttribute("href", "#");
    document.getElementById("body").innerHTML = thoughtsPage;
    document.getElementById("foobar").innerHTML = foobar;

    let root = document.getElementById("blog");
    root.style.background = "#8839ef";
    let aroot = document.getElementById("ablog");
    aroot.style.background = "#8839ef";

    loadConten();
}

function loadConten() {
    let page = document.getElementById("thoughtsContent");

    page.innerHTML = `<h1> try </h1>`
    page.innerHTML += `<p onclick="back()"> back </p>`
}

function back() {
    window.history.back();
}

