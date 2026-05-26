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

const nextBtn =
    document.getElementById("nextBtn");

const prevBtn =
    document.getElementById("prevBtn");

function updateImage() {

    lightboxImage.src =
        images[currentIndex].src;
}

function updateImage() {

    lightboxImage.src =
        images[currentIndex].src;
}

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex =
            images.length - 1;
    }

    updateImage();

});

