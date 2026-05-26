const filterButtons =
    document.querySelectorAll(".filter-btn");

const portfolioItems =
    document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        console.log(button.dataset.filter);

    });

});

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter =
            button.dataset.filter;

        portfolioItems.forEach(item => {

            const category =
                item.dataset.category;

            if (
                filter === "all" ||
                category === filter
            ) {

                item.style.display =
                    "block";

            } else {

                item.style.display =
                    "none";
            }

        });

    });

});

filterButtons.forEach(btn => {

    btn.classList.remove("active");

});

button.classList.add("active");
