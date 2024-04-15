

fetch('http://localhost:3000/pokedex')
.then(resp =>  resp.json())
.then(data => {
        console.log(data);
    for(let i = 0; i < data.pokedex.length; i++) {
        console.log(data.pokedex[i].height)
    }
    
    // let pokedexContainer = document.getElementById("pokemonContainer");
    // let pokedexCard = document.createElement("div");
    // pokedexCard.classList.add("card");

    // let pokemonNameTag = document.createElement("p");
    // let pokemonUrl = document.createElement("p");
    
    // pokemonNameTag.innerText = "Name: " + user[i].name;
    // pokemonUrl.innerText = "Url:  " + user[i].image;
    
    // pokedexCard.appendChild(pokemonNameTag);
    // pokedexCard.appendChild(pokemonUrl);
    // pokedexContainer.appendChild(pokedexCard);
});