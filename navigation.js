const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

//When someone clicks the hamburger button
navToggle.addEventListener("click", () => {

    const visibility = nav.getAttribute("data-visible");
    //if the nav is closed, open it
    if(visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("data-visible", true)
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("data-visible", true)
    }
    //if the nav is open, close it
})
