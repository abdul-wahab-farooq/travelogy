// sidebar logic
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var wrapper = document.querySelector(".wrapper");

    if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        wrapper.classList.remove("sidebar-open");
    } else {
        sidebar.classList.add("open");
        wrapper.classList.add("sidebar-open");
    }
}