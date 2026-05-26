const question =
    document.querySelector(".question");

const answer =
    document.querySelector(".answer");

answer.style.display = "none";

question.addEventListener(
    "click",
    () => {

        if (
            answer.style.display === "none"
        ) {

            answer.style.display = "block";

        } else {

            answer.style.display = "none";
        }
    }
);