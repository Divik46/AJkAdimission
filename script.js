
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.step-card');
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.5 });

    cards.forEach(card => {
        observer.observe(card);
    });
});





const dropUpButtons = document.querySelectorAll(".drop-up");

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

dropUpButtons.forEach((button) => {
    button.addEventListener("click", scrollToTop);
});


function toggleInstructions() {
    let instructions = document.getElementById("instructions");
    let button = document.querySelector(".toggle-btn");

    if (instructions.classList.contains("hidden")) {
        instructions.classList.remove("hidden");
        button.textContent = "Hide Instructions";
    } else {
        instructions.classList.add("hidden");
        button.textContent = "Show Instructions";
    }
}
