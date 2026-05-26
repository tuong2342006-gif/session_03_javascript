const colorBox =
    document.getElementById("colorBox");

const colorCode =
    document.getElementById("colorCode");

const generateBtn =
    document.getElementById("generateBtn");

function randomColor() {

    const color =
        "#" +
        Math.floor(
            Math.random() * 16777215
        ).toString(16);

    colorBox.style.backgroundColor =
        color;

    colorCode.textContent =
        color;
}

generateBtn.addEventListener(
    "click",
    randomColor
);