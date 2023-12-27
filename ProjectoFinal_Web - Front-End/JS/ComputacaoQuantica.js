
function openNav() {
    globalThis.document.getElementById("myNav").style.width = "100%";
    globalThis.document.getElementById("myNav").style.opacity = "0.5";
    globalThis.document.getElementsByClassName("col")[1].style.visibility = "hidden";
    globalThis.document.getElementsByClassName("col")[2].style.visibility = "hidden";
}

function closeNav() {
    globalThis.document.getElementById("myNav").style.width = "0%";
    globalThis.document.getElementsByClassName("col")[1].style.visibility = "visible";
    globalThis.document.getElementsByClassName("col")[2].style.visibility = "visible";
}