const billAmount =
    document.getElementById("billAmount");

const tipPercent =
    document.getElementById("tipPercent");

const result =
    document.getElementById("result");

function calculate() {

    const bill =
        Number(billAmount.value);

    const tip =
        Number(tipPercent.value);

    const total =
        bill + (bill * tip) / 100;

    result.textContent =
        `Total: ${total}`;
}

billAmount.addEventListener(
    "input",
    calculate
);

tipPercent.addEventListener(
    "input",
    calculate
);