//Responsive Menu
let show = true;

const menuSection = document.querySelector("nav")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden":"initial"

    menuSection.classList.toggle("active", show)
    show = !show
})