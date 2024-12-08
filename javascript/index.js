function init() {
    document.getElementById("navbar").innerHTML = navbar;
    document.getElementById("ahome").setAttribute("href", "#");
    document.getElementById("body").innerHTML = mainPage;
    document.getElementById("foobar").innerHTML = foobar;

    let root = document.getElementById("home");
    root.style.background = "#8839ef";
    let aroot = document.getElementById("ahome");
    aroot.style.background = "#8839ef";
}

