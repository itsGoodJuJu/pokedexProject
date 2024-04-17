

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








// // Joel's work

// const goTime = document.getElementById("pokeBut");
// goTime.addEventListener("click", getPoke);
// goTime.addEventListener("click", getPoke2);
// //funtion to get pokemon1
// function getPoke(){
//     for(i = 0; i < pokeArray.length;i += Math.floor(Math.random()* 5)){
//         let pokeImg = pokeArray[i].image;
//         let imgelement = document.getElementById("pokemonSprite1")
//         imgelement.src = pokeImg;
//         imgelement.style.display = "block"
//         document.getElementById("pokeMon1").innerHTML = (`Name: ${pokeArray[i].name}<br>Primary Type: ${pokeArray[i].primary_type}<br>Secondary Type: ${pokeArray[i].secondary_type}<br>Evolution Stage: ${pokeArray[i].evolution_stage}<br>Region: ${pokeArray[i].region_of_origin}<br>Height: ${pokeArray[i].height}<br>Weight Lbs: ${pokeArray[i].weight_lbs}<br>BST: ${pokeArray[i].bst}<br>${pokeArray[i].image}<br>Attacks: ${pokeArray[i].moves.attack1}`)
//     };
// }
// //function to get pokemon2
// function getPoke2(){
//     for(i = 0; i < pokeArray.length; i += Math.floor(Math.random()* 5)){
//         console.log(pokeArray[i].name)
//         let pokeImg2 = pokeArray[i].image;
//         let imgelement2 = document.getElementById("pokemonSprite2")
//         imgelement2.src = pokeImg2;
//         imgelement2.style.display = "block"
//     document.getElementById("pokeMon2").innerHTML = (`Name: ${pokeArray[i].name}<br>Primary Type: ${pokeArray[i].primary_type}<br>Secondary Type: ${pokeArray[i].secondary_type}<br>Evolution Stage: ${pokeArray[i].evolution_stage}<br>Region: ${pokeArray[i].region_of_origin}<br>Height: ${pokeArray[i].height}<br>Weight Lbs: ${pokeArray[i].weight_lbs}<br>BST: ${pokeArray[i].bst}<br>${pokeArray[i].image}<br>Attacks: ${pokeArray[i].moves.attack1}`);
// };
// };

// // Joel's Work ^^