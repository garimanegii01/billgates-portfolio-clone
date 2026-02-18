var tl = gsap.timeline()
tl.from("nav h1", {
    y: -30,
    opacity: 0,
    duration: 0.5,
})
tl.from("nav li", {
    y: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
})



var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
