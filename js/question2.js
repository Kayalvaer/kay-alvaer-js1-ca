async function getGames() {
    const url = "https://api.rawg.io/api/games?dates=2000-01-01,2000-12-31&ordering=-rating"
    const resultContainer = document.querySelector(".results");

    try {
        const res = await fetch(url);
        const json = await res.json();

        const games = json.results;

        games.forEach(function (game) {

        })

        resultContainer.innerHTML = "";

        games.forEach(game => {
            resultContainer.innerHTML += `<a class="game" href="question3.html?gameId=${game.id}">
                                            <h5>${game.name}</h5>
                                            <div class="image" style="background-image: url(${playGame.background_image});"></div>
                                            <p>Number of reviews: ${game.reviews_count}</p>
                                            <p>Number of platforms: ${game.platforms.length}</p>
                                        </a>`;

        })
    } catch (error) {
        resultContainer.innerHTML = error;
    }
}

getGames()