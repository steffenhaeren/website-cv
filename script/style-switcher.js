/* STYLE SWITCHER SCRIPT */

/* OPENS STYLE-SWITCHER WHEN COG IS PRESS AND VISE VERSA */
const styleSwitcherToggle = get(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    get(".style-switcher").classList.toggle("open");
})


/* HIDE STYLE-SWITCHER ON SCROLL */
window.addEventListener("scroll", () => {
    if(get(".style-switcher").classList.contains("open")){
        get(".style-switcher").classList.remove("open");
    }
})


/* THEME COLORS */
const alternateStyles = getAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}


/* THEME LIGHT AND DARK */
const dayNight = get(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});






/* SUPPORT FUNCTIONS */
function get(id){
    return document.querySelector(id);
}
function getAll(id){
    return document.querySelectorAll(id);
}