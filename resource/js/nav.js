/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.right = "0";
    document.getElementById("all").style.overflow = "hidden";
    document.getElementById("overlay").style.opacity = ".9";
    document.getElementById("overlay").style.display = "block";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.right = "-300px";
    document.getElementById("all").style.overflow = "auto";
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("overlay").style.display = "none";
}