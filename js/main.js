let toggleSidebar = document.querySelector(".header__toggle-sidebar");
let sidebar = document.querySelector(".sidebar");

toggleSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("visible");
});
