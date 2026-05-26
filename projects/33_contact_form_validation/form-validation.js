const form =
    document.getElementById("contactForm");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");

const nameError =
    document.getElementById("nameError");

const emailError =
    document.getElementById("emailError");

const messageError =
    document.getElementById("messageError");

function validateEmail(email) {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}
console.log(
    validateEmail("abc@gmail.com")
);

console.log(
    validateEmail("abcgmail.com")
);

nameInput.addEventListener(
    "input",
    () => {

        if (
            nameInput.value.trim() === ""
        ) {

            nameError.textContent =
                "Name is required";

        } else {

            nameError.textContent = "";
        }
    }
);

emailInput.addEventListener(
    "input",
    () => {

        if (
            !validateEmail(
                emailInput.value
            )
        ) {

            emailError.textContent =
                "Invalid email format";

        } else {

            emailError.textContent = "";
        }
    }
);

messageInput.addEventListener(
    "input",
    () => {

        if (
            messageInput.value.length < 10
        ) {

            messageError.textContent =
                "Minimum 10 characters";

        } else {

            messageError.textContent = "";
        }
    }
);

form.addEventListener(
    "submit",
    (e) => {

        e.preventDefault();

        const isNameValid =
            nameInput.value.trim() !== "";

        const isEmailValid =
            validateEmail(
                emailInput.value
            );

        const isMessageValid =
            messageInput.value.length >= 10;

        if (
            isNameValid &&
            isEmailValid &&
            isMessageValid
        ) {

            alert("Form submitted!");

            form.reset();

        } else {

            alert(
                "Please fix validation errors."
            );
        }

    }
);