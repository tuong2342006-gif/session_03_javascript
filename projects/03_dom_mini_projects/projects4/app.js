const passwordInput =
    document.getElementById("passwordInput");

const strength =
    document.getElementById("strength");

passwordInput.addEventListener(
    "input",
    () => {

        const value =
            passwordInput.value;

        if (value.length < 6) {

            strength.textContent =
                "Weak";

        } else if (value.length < 10) {

            strength.textContent =
                "Medium";

        } else {

            strength.textContent =
                "Strong";
        }
    }
);