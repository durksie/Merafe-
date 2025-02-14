

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
    const burgerIcon = burger.querySelector("i");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        // Toggle between the burger and minimize icons
        if (navLinks.classList.contains("active")) {
            burgerIcon.classList.remove("fa-bars");
            burgerIcon.classList.add("fa-times");
        } else {
            burgerIcon.classList.remove("fa-times");
            burgerIcon.classList.add("fa-bars");
        }
    });

    document.addEventListener("click", (e) => {
        if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove("active");
            burgerIcon.classList.remove("fa-times");
            burgerIcon.classList.add("fa-bars");
        }
    });
});



function toggleDescription(id) {

    var description = document.getElementById(id);

    if (description.style.display === "none" || description.style.display === "") {

        description.style.display = "block";

    } else {

        description.style.display = "none";

    }

}

function toggleCardContent(id) {
    var content = document.getElementById(id);
    var allContents = document.querySelectorAll('.alt-card-content');
    allContents.forEach(function(item) {
        if (item !== content) {
            item.style.display = 'none';
        }
    });
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

function viewMore(id) {
    alert("Viewing more details for " + id);
}