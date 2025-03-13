
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Deactivate all tabs
            tabs.forEach((t) => t.classList.remove("active"));
            // Hide all contents
            contents.forEach((content) => content.classList.remove("active"));

            // Activate clicked tab and its content
            tab.classList.add("active");
            document.getElementById(tab.dataset.tab).classList.add("active");
        });
    });
});
