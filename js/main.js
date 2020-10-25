let toggleNavigation = document.querySelector(".header__toggle-navigation");
let navigation = document.querySelector(".header__navigation");

toggleNavigation.addEventListener("click", () => {
    navigation.classList.toggle("visible-navigation");
});

let toggleSidebar = document.querySelector(".header__toggle-sidebar");
let sidebar = document.querySelector(".sidebar");

toggleSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("visible");
});
