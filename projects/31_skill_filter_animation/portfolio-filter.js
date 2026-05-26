const filterButtons =
    document.querySelectorAll(".filter-btn");

const portfolioItems =
    document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        console.log(button.dataset.filter);

    });

});