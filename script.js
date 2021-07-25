console.log("GOT | Quotes | By:----- Salman Malik");


// fetch quotes from api
function getQuotes()
{
    console.log("Fetch function...")
    fetch("https://game-of-thrones-quotes.herokuapp.com/v1/random",{
        method: 'GET'
    })
    .then((random) => random.json())
    // .then(random => 
    //     console.log(random.sentence)
    //     )
    .then((random) => loadQuotes(random))
    console.log("End of fetch function...");
}

//calling getQuotes function
getQuotes();

// loading random quotes
function loadQuotes(random)
{
    console.log("load funciton...")
    const quotesList = document.createElement("div");
    quotesList.className = "quotes-list";

    const quotesContainer = document.createElement("div");
    quotesContainer.className = "quotes-container";

    quotesContainer.innerHTML =
    `
        <div>
        <label class="bold">Name:--</label>
        <label class="light-bold">${random.character.name}</label><br>
        <label class="bold">House Name:--</label>
        <label class="light-bold">${random.character.house.name}</label><br>
        <label class="bold">Sentence:</label>
        <label class="light-bold">${random.sentence}</label>
        </div>
        <input type = "button" value = "⚔️   Get New Quote   ⚔️" onclick="refreshQuotes()"></input>
    `;
    quotesList.append(quotesContainer);

    document.body.append(quotesList);

    console.log("end of load funtion...");
}

// refresh  to load new quote
function refreshQuotes(){
    fetch("https://game-of-thrones-quotes.herokuapp.com/v1/random",{
        method: "get"
    })
    .then((random) => random.json());
    document.querySelector(".quotes-list").remove()
    getQuotes();
}

