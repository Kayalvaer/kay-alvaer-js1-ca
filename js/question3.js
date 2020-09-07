const resultsContainer = document.querySelector(".results");

const url = "https://api.rawg.io/api/games/1334";

async function fetchGames() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        resultsContainer.innerHTML = "";

        const games = json.results;

        games.foreach(function (game) {
            resultsContainer.innerHTML += `<h1>${details.name}</h1>
                            <div class="details-image" 
                                style="background-image: url('${details.background_image}')">
                            </div>
                            <div class="details-description">${details.description}</div>`;
        });

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }

}

fetchGame();