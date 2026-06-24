const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
        link.classList.add("active");
    }
});

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const searchValue = searchInput.value.toLowerCase();

        const destinations = document.querySelectorAll(".destination-item");

        destinations.forEach(destination => {

            const text = destination.textContent.toLowerCase();

            if (text.includes(searchValue)) {
                destination.classList.remove("hidden");
            } else {
                destination.classList.add("hidden");
            }

        });

    });

}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Thank you for contacting Travel Explorer!");

        contactForm.reset();

    });

}
