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

function renderMovies(movies) {

    movieContainer.innerHTML = "";

    movies.forEach(movie => {

        movieContainer.innerHTML += `
            <div class="movie-card">

                <img
                    src="${movie.Poster}"
                    alt="${movie.Title}"
                    width="150"
                >

                <h3>
                    ${movie.Title}
                </h3>

                <p>
                    ${movie.Year}
                </p>

            </div>
        `;
    });
}

if (
    data.Response === "False"
) {

    movieContainer.innerHTML =
        "<h2>No movies found</h2>";

    return;
}

let favorites =
    JSON.parse(
        localStorage.getItem(
            "favorites"
        )
    ) || [];

<button
    class="favorite-btn"
    data-id="${movie.imdbID}"
>
    Favorite
</button>

movieContainer.addEventListener(
    "click",
    (e) => {

        if (
            e.target.classList.contains(
                "favorite-btn"
            )
        ) {

            const movieId =
                e.target.dataset.id;

            favorites.push(movieId);

            localStorage.setItem(
                "favorites",
                JSON.stringify(
                    favorites
                )
            );

        }

    }
);
