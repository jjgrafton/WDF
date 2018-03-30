//Pokemon constructor 
class Pokemon {
    constructor(pokehash) {
        this.name = pokehash.name
        this.number = pokehash.number
        this.hp = pokehash.hp
        this.attack = pokehash.attack
        this.defense = pokehash.defense
        this.abilities = pokehash.abilities
    }
}


$.ajax({
    url: 'http://pokeapi.salestock.net/api/v2/pokemon/43/',
    method: 'GET',
    dataType: 'json',
    success: function (oddishData) {
        console.log(oddishData)
        oddish.name = data.name
        oddish.number = data.id
        oddish.hp = data.stats[5].base_stat
        oddish.defense = data.stats[3].base_stat
        oddish.attack = data.stats[4].base_stat
        oddish.abilities = data.abilities.name
        var abilities = [];
        for (var i = 0; i < oddishData.abilities.length; i++) {
            abilities.push(oddishData.abilities[i].ability.name)
        }
    }
})

$.ajax({
    url: 'http://pokeapi.salestock.net/api/v2/pokemon/44/',
    method: 'GET',
    dataType: 'json',
    success: function (gloomData) {
        console.log(gloomData)
        gloom.name = data.name
        gloom.number = data.id
        gloom.hp = data.stats[5].base_stat
        gloom.defense = data.stats[3].base_stat
        gloom.attack = data.stats[4].base_stat
        gloom.abilities = data.abilities.name
        var abilities = [];
        for (var i = 0; i < gloomData.abilities.length; i++) {
            abilities.push(gloomData.abilities[i].ability.name)
        }
    }
})

$.ajax({
    url: 'http://pokeapi.salestock.net/api/v2/pokemon/110/',
    method: 'GET',
    dataType: 'json',
    success: function (weezingData) {
        console.log(weezingData)
        weezing.name = data.name
        weezing.number = data.id
        weezing.hp = data.stats[5].base_stat
        weezing.defense = data.stats[3].base_stat
        weezing.attack = data.stats[4].base_stat
        weezing.abilities = data.abilities.name
        var abilities = [];
        $.each(abilities, function (key, value) {
            console.log(value.ability.name);
            s

        })

    }
})


let oddish = {
    name: "",
    number: 0,
    hp: 0,
    defense: 0,
    attack: 0,
    abilities: [],
}

let gloom = {
    name: "",
    number: 0,
    hp: 0,
    defense: 0,
    attack: 0,
    abilities: [],
}

let weezing = {
    name: "",
    number: 0,
    hp: 0,
    defense: 0,
    attack: 0,
    abilities: [],
}

let oddishPoke = new Pokemon(oddish)
let gloomPoke = new Pokemon(oddish)
let weezingPoke = new Pokemon(oddish)

/*Class of Trainer - stores Pokemon objects. 
Method named all returns an array of Pokemon objects.
Method named get with one parameter called name, 
returns a Pokemon object housing information for the Pokemon it found*/

class Trainer {
    constructor(name) {
        this.name = name;
        this.pokemon = [];
    }
    //function to add Pokemon to trainer array
    addPokemon(pokemon) {
        this.pokemon.push(pokemon);
    }

}


pokeContainer = (pokemon) => {
    let name = pokemon.name

    //div for all individual pokemon data
    let pokeDiv = $("<div/>").addClass("pokemon-character", name)
    let name = $("<h2/>").text("Name: " + (pokemon.name))
    let pokemonNumber = $("<h3/>").text(pokemon.number)
    let attack = $("<p/>").text("Attack: " + (pokemon.attack))
    let defense = $("<p/>").text("Defense: " + (pokemon.defense))
    let hp = $("<p/>").text("HP: " + (pokemon.hp))


    //make an abilities list
    let abilitiesList = $("<ul/>").addClass("ability-list")
    /*pokemon.abilities.forEach((ability) => {
        if (ability.isHidden) {
            $("<li/>").text(ability.name).addClass("hidden-ability").appendTo(abilitiesList)
        }
        $("<li/>").text(ability.name).appendTo(abilitiesList)
    })*/
}
    







let professor = new Trainer ("Professor Grim");

document.getElementById("oddishBtn").addEventListener("click", oddishEvent)
function oddishEvent() {
    let pokeCard = document.getElementsByClassName("card-content");
    
    //add content listed in pokeContainer to pokeCard
}



document.getElementById("gloomBtn").addEventListener("click", ?????);
function gloomEvent() {
    let pokeCard = document.getElementsByClassName("card-content");
    //add content listed in pokeContainer to pokeCard

}



document.getElementById("weezingBtn").addEventListener("click", ?????);
function weezingEvent() {
    let pokeCard = document.getElementsByClassName("card-content");
    //add content listed in pokeContainer to pokeCard

}

// pokeContainer()




  //ajax call - parameter is pokemon ID
/* function getPokemon(idNumber) {
    return $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + idNumber,
        success: function (data) {
            //populate the pokeData with the ajax data
            pokeData.name = data.name
            pokeData.number = data. //look up this stat
            pokeData.hp = data.stats[5].base_stat
            pokeData.defense = data.stats[3].base_stat
            pokeData.attack = data.stats[4].base_stat
            pokeData.abilities = data.abilities.name
            //go through abilities and display
            /*Need to add: 
            - move related information
            - priority
            - power
            - accuracy*/

            //create a new pokemon
           /*  let pokemon = new Pokemon(pokeData)

            //call function to add to professor's array
            professor.addPokemon(pokemon);

          
        },
        error: function (error) {
            console.log(error)
        }
    })
}
 */ 
//da