const images =
    document.querySelectorAll(".gallery-image");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

let currentIndex = 0;
document.addEventListener("click", (e) => {

    if (
        e.target.classList.contains(
            "gallery-image"
        )
    ) {

        images.forEach((img, index) => {

            if (img === e.target) {

                currentIndex = index;

            }

        });

        lightboxImage.src =
            e.target.src;

        lightbox.style.display =
            "flex";
    }

});