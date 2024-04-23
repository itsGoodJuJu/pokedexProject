function battle() {
    fetch("http://localhost:3000/pokedex?partyPokemon")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        let pokemon1Name = document.getElementById('pokemon1Name');
        let pokemon1Type = document.getElementById('pokemon1Type');
        let pokemon1Region = document.getElementById('pokemon1Region');
        let pokemonHeight = document.getElementById('pokemonHeight');
        let pokemonBST = document.getElementById('pokemonBST');
        let pokemonWeight = document.getElementById('pokemonWeight');

        let pokemon2Name = document.getElementById('pokemon2Name');
        let pokemon2Type = document.getElementById('pokemon2Type');
        let pokemon2Region = document.getElementById('pokemon2Region');
        let pokemon2Height = document.getElementById('pokemon2Height');
        let pokemon2BST = document.getElementById('pokemon2BST');
        let pokemon2Weight = document.getElementById('pokemon2Weight');

        let randomPokemonIndex = Math.floor(Math.random() * 6);
        let randomPokemon2Index = Math.floor(Math.random() * 6);

        let selectedPokemon = data[randomPokemonIndex];
        console.log(selectedPokemon)
        let selectedPokemon2 = data[randomPokemon2Index];
        console.log(selectedPokemon2)

        pokemon1Name.innerText = selectedPokemon.name;
        // pokemon1Type.innerText = "Primary Type: " + selectedPokemon.primary_type;
        // pokemon1Region.innerText = "Region of origin: " + selectedPokemon.region_of_origin;
        // pokemonHeight.innerText = "Height:  " + selectedPokemon.height;
        // pokemonBST.innerText = "Battle strength Total: " + selectedPokemon.bst;
        // pokemonWeight.innerText = "Weight_lbs: " + selectedPokemon.weight_lbs;

        pokemon2Name.innerText = selectedPokemon2.name;
        // pokemon2Type.innerText = "Primary Type: " + selectedPokemon2.primary_type;
        // pokemon2Region.innerText = "Region of origin: " + selectedPokemon2.region_of_origin;
        // pokemon2Height.innerText = "Height: " + selectedPokemon2.height;
        // pokemon2BST.innerText = "Battle strength Total: " + selectedPokemon2.bst;
        // pokemon2Weight.innerText = "Weight_lbs: " + selectedPokemon2.weight_lbs;

        let pokemon1Image = document.createElement('img');
        pokemon1Image.setAttribute('src', selectedPokemon.image);
        pokemon1Image.setAttribute('class', 'pokemonImage');

        let pokemon2Image = document.createElement('img');
        pokemon2Image.setAttribute('src', selectedPokemon2.image);
        pokemon2Image.setAttribute('class', 'pokemonImage');

        pokemonPic1.innerHTML = '';
        pokemonPic1.appendChild(pokemon1Image);

        pokemonPic2.innerHTML = '';
        pokemonPic2.appendChild(pokemon2Image);
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






// })

// }
   
