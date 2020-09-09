// get the querystring
const qs = document.location.search;

// create an object that will allows us to access all the querystring parameters
const parameters = new URLSearchParams(qs);

// get the id parameter from the querystring
const gameId = parameters.get("gameId");

if (gameId === null) {
    document.location.href = "question2.html";
}


async function getGame() {
    // const url = "https://api.rawg.io/api/games/" + gameId;
    //const url = "https://api.rawg.io/api/games/" + id;
    const url = `httpss://api.rawg.io/api/games/${gameId}`;

    const detailContainer = document.querySelector(".detail");

    try {
        const response = await fetch(url);
        const json = await response.json();

        //createHtml(details);
        detailContainer.innerHTML =
            `<a href="details.html?id=${playGame.id}" class="card">
                                                <h4 class="name">${playGame.name}</h4> 
                                                <div class="image" style="background-image: url(${playGame.background_image});"></div>
                                                <div class="details">
                                                <a href="${json.website}" target="_blank">Visit website</a>
                                                <h4 class="name">${playGame.released}</h4>                                                                                                                                                           
                                                </div>
                                    </a>`;

        console.log(json)

    } catch (error) {
        detailContainer.innerHTML = `<div class="error-message">An error occur</div>`;
    }

}

getGame();

console.log(gameId);