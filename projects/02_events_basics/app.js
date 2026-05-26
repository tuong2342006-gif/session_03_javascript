const counter =
    document.getElementById("counter");

const increaseBtn =
    document.getElementById("increaseBtn");

let count = 0;

increaseBtn.addEventListener("click", () => {

    count++;

    counter.textContent = count;

});