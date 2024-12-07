function init() {
    document.getElementById("navbar").innerHTML = navbar;
    document.getElementById("ablog").setAttribute("href", "#");
    document.getElementById("body").innerHTML = mainPage;

    let root = document.getElementById("blog");
    root.style.background = "#8839ef";
    let aroot = document.getElementById("ablog");
    aroot.style.background = "#8839ef";
}

