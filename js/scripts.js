const navbar = document.querySelector(".navbar-nav");
window.onscroll = function() {
    if (window.scrollY > 2) {
        navbar.classList.add("navPop");
    } else {
        navbar.classList.remove("navPop");
    }
};