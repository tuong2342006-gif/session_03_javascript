const counter =
    document.getElementById("counter");

const increaseBtn =
    document.getElementById("increaseBtn");

let count = 0;

increaseBtn.addEventListener("click", () => {

    count++;

    counter.textContent = count;

});

const searchInput =
    document.getElementById("searchInput");

const result =
    document.getElementById("result");

searchInput.addEventListener("input", () => {

    result.textContent =
        searchInput.value;

});

const keyDisplay =
    document.getElementById("keyDisplay");

document.addEventListener("keydown", (e) => {

    keyDisplay.textContent =
        `You pressed: ${e.key}`;

});