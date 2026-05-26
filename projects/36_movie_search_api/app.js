const API_KEY = "YOUR_API_KEY";

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const movieContainer =
    document.getElementById("movieContainer");

const loading =
    document.getElementById("loading");

let currentPage = 1;

async function searchMovies() {

    const keyword =
        searchInput.value.trim();

    if (!keyword) return;

    loading.textContent =
        "Loading...";

    try {

        const response =
            await fetch(
                `https://www.omdbapi.com/?apikey=${API_KEY}&s=${keyword}&page=${currentPage}`
            );

        const data =
            await response.json();

        renderMovies(data.Search);

    } catch (error) {

        console.error(error);

    } finally {

        loading.textContent = "";
    }
}
searchBtn.addEventListener(
    "click",
    searchMovies
);