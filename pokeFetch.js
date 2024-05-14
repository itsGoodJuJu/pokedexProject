
// document.getElementById('playerButton').addEventListener('click',function(){
//     callAPI('http://localhost:3000/pokedex?partyPokemon');
// });

// document.getElementById('oppoButton').addEventListener('click',function(){
//     callAPI('http://localhost:3000/pokedex?oppoPokemon');
// });


// function callAPI(endpoint) {
//     fetch(endpoint, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }) .then(resp => {
//         if(!resp.ok){
//             throw new Error('Network response failed');
//         }
//         console.log('API call successful');
//     })
//     .catch(error => {
//         console.error('There was a problem:', error)
//     })
// }





// David's function and fetch
function playerTeam() {
    fetch("http://localhost:3000/pokedex?partyPokemon")
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);

        let pokemonPic1 = document.getElementById('pokemonPic1');
        let pokemonPic2 = document.getElementById('pokemonPic2');
        let pokemonPic3 = document.getElementById('pokemonPic3');
        let pokemonPic4 = document.getElementById('pokemonPic4');
        let pokemonPic5 = document.getElementById('pokemonPic5');
        let pokemonPic6 = document.getElementById('pokemonPic6');

        let selectedPokemon1 = data[0];
        let selectedPokemon2 = data[1];
        let selectedPokemon3 = data[2];
        let selectedPokemon4 = data[3];
        let selectedPokemon5 = data[4];
        let selectedPokemon6 = data[5];

        let pokemon1Image = document.createElement('img');
        let pokemon2Image = document.createElement('img');
        let pokemon3Image = document.createElement('img');
        let pokemon4Image = document.createElement('img');
        let pokemon5Image = document.createElement('img');
        let pokemon6Image = document.createElement('img');


        pokemon1Image.setAttribute('src', selectedPokemon1.image);
        pokemon1Image.setAttribute('class', 'playerteam');

        pokemon2Image.setAttribute('src', selectedPokemon2.image);
        pokemon2Image.setAttribute('class', 'playerteam');

        pokemon3Image.setAttribute('src', selectedPokemon3.image);
        pokemon3Image.setAttribute('class', 'playerteam');

        pokemon4Image.setAttribute('src', selectedPokemon4.image);
        pokemon4Image.setAttribute('class', 'playerteam');

        pokemon5Image.setAttribute('src', selectedPokemon5.image);
        pokemon5Image.setAttribute('class', 'playerteam');

        pokemon6Image.setAttribute('src', selectedPokemon6.image);
        pokemon6Image.setAttribute('class', 'playerteam');

        pokemonPic1.innerHTML = '';
        pokemonPic1.appendChild(pokemon1Image);

        pokemonPic2.innerHTML = '';
        pokemonPic2.appendChild(pokemon2Image);

        pokemonPic3.innerHTML = '';
        pokemonPic3.appendChild(pokemon3Image);

        pokemonPic4.innerHTML = '';
        pokemonPic4.appendChild(pokemon4Image);

        pokemonPic5.innerHTML = '';
        pokemonPic5.appendChild(pokemon5Image);

        pokemonPic6.innerHTML = '';
        pokemonPic6.appendChild(pokemon6Image);
    });
}

function opponentTeam() {
    fetch("http://localhost:3000/pokedex?oppoPokemon")
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);

        let oppoPic1 = document.getElementById('oppoPic1');
        let oppoPic2 = document.getElementById('oppoPic2');
        let oppoPic3 = document.getElementById('oppoPic3');
        let oppoPic4 = document.getElementById('oppoPic4');
        let oppoPic5 = document.getElementById('oppoPic5');
        let oppoPic6 = document.getElementById('oppoPic6');
        // let pokemon1Name = document.getElementById('pokemon1Name');
        // let pokemon1Type = document.getElementById('pokemon1Type');
        // let pokemon1Region = document.getElementById('pokemon1Region');
        // let pokemonHeight = document.getElementById('pokemonHeight');
        // let pokemonBST = document.getElementById('pokemonBST');
        // let pokemonWeight = document.getElementById('pokemonWeight');

        // let pokemonPic2 = document.getElementById('pokemonPic2');
        // let pokemon2Name = document.getElementById('pokemon2Name');
        // let pokemon2Type = document.getElementById('pokemon2Type');
        // let pokemon2Region = document.getElementById('pokemon2Region');
        // let pokemon2Height = document.getElementById('pokemon2Height');
        // let pokemon2BST = document.getElementById('pokemon2BST');
        // let pokemon2Weight = document.getElementById('pokemon2Weight');

        // let randomPokemonIndex = Math.floor(Math.random() * 27);
        // let randomPokemon2Index = Math.floor(Math.random() * 27);

        let selectedPokemon1 = data[0];
        let selectedPokemon2 = data[1];
        let selectedPokemon3 = data[2];
        let selectedPokemon4 = data[3];
        let selectedPokemon5 = data[4];
        let selectedPokemon6 = data[5];

        // let selectedPokemon2 = data.pokedex[randomPokemon2Index];
        // console.log(selectedPokemon2)

        // pokemon1Name.innerText = "Name: " + selectedPokemon.name;
        // pokemon1Type.innerText = "Primary Type: " + selectedPokemon.primary_type;
        // pokemon1Region.innerText = "Region of origin: " + selectedPokemon.region_of_origin;
        // pokemonHeight.innerText = "Height:  " + selectedPokemon.height;
        // pokemonBST.innerText = "Battle strength Total: " + selectedPokemon.bst;
        // pokemonWeight.innerText = "Weight_lbs: " + selectedPokemon.weight_lbs;

        // pokemon2Name.innerText = "Name: " + selectedPokemon2.name;
        // pokemon2Type.innerText = "Primary Type: " + selectedPokemon2.primary_type;
        // pokemon2Region.innerText = "Region of origin: " + selectedPokemon2.region_of_origin;
        // pokemon2Height.innerText = "Height: " + selectedPokemon2.height;
        // pokemon2BST.innerText = "Battle strength Total: " + selectedPokemon2.bst;
        // pokemon2Weight.innerText = "Weight_lbs: " + selectedPokemon2.weight_lbs;

        let pokemon1Image = document.createElement('img');
        let pokemon2Image = document.createElement('img');
        let pokemon3Image = document.createElement('img');
        let pokemon4Image = document.createElement('img');
        let pokemon5Image = document.createElement('img');
        let pokemon6Image = document.createElement('img');


        pokemon1Image.setAttribute('src', selectedPokemon1.image);
        pokemon1Image.setAttribute('class', 'oppoteam');

        pokemon2Image.setAttribute('src', selectedPokemon2.image);
        pokemon2Image.setAttribute('class', 'oppoteam');

        pokemon3Image.setAttribute('src', selectedPokemon3.image);
        pokemon3Image.setAttribute('class', 'oppoteam');

        pokemon4Image.setAttribute('src', selectedPokemon4.image);
        pokemon4Image.setAttribute('class', 'oppoteam');

        pokemon5Image.setAttribute('src', selectedPokemon5.image);
        pokemon5Image.setAttribute('class', 'oppoteam');

        pokemon6Image.setAttribute('src', selectedPokemon6.image);
        pokemon6Image.setAttribute('class', 'oppoteam');

        // let pokemon2Image = document.createElement('img');
        // pokemon2Image.setAttribute('src', selectedPokemon2.image);
        // pokemon2Image.setAttribute('alt', selectedPokemon2.name);
        // pokemon2Image.setAttribute('class', 'pokemonImage');

        oppoPic1.innerHTML = '';
        oppoPic1.appendChild(pokemon1Image);

        oppoPic2.innerHTML = '';
        oppoPic2.appendChild(pokemon2Image);

        oppoPic3.innerHTML = '';
        oppoPic3.appendChild(pokemon3Image);

        oppoPic4.innerHTML = '';
        oppoPic4.appendChild(pokemon4Image);

        oppoPic5.innerHTML = '';
        oppoPic5.appendChild(pokemon5Image);

        oppoPic6.innerHTML = '';
        oppoPic6.appendChild(pokemon6Image);

        // pokemonPic2.innerHTML = '';
        // pokemonPic2.appendChild(pokemon2Image);
    });
}

// battle() === moves();

  function moves() {

    fetch("http://localhost:3000/pokedex?partyPokemon")
    .then((response) => response.json())
    .then((data) => {
        
        for(let i=0; i < data.length; i++) {
            for(let j=0; j < data[i].moves.length; j++){
                console.log(data[i].moves[j]);
            }

        }

        let pokemonMoves = document.getElementById('pokemonMoves')

        let randomPokemonIndex = Math.floor(Math.random() * 6);

        let selectedPokemon = data[i].moves[0].length[randomPokemonIndex];

        console.log(selectedPokemon);

        pokemonMoves.innerText = "Move: " + selectedPokemon.moves[i];


     })
}








// fetch('http://localhost:3000/pokedex')
// .then(resp =>  resp.json())
// .then(data => {
//         console.log(data);
//     for(let i = 0; i < data.pokedex.length; i++) {
//         console.log(data.pokedex[i].height)
//     }
    
//     // let pokedexContainer = document.getElementById("pokemonContainer");
//     // let pokedexCard = document.createElement("div");
//     // pokedexCard.classList.add("card");

//     // let pokemonNameTag = document.createElement("p");
//     // let pokemonUrl = document.createElement("p");
    
//     // pokemonNameTag.innerText = "Name: " + user[i].name;
//     // pokemonUrl.innerText = "Url:  " + user[i].image;
    
//     // pokedexCard.appendChild(pokemonNameTag);
//     // pokedexCard.appendChild(pokemonUrl);
//     // pokedexContainer.appendChild(pokedexCard);
// });








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