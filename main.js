//Pokemon constructor 
class Pokemon {
    constructor(number, hp, attack, defense, abilities) {
        this.number = number
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.abilities = abilities
    }
}

//ajax call - parameter is pokemon ID
function getPokemon(idNumber) {
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
            let pokemon = new Pokemon(pokeData)

            professor.addPokemon(pokemon);

          
        },
        error: function (error) {
            console.log(error)
        }
    })
}

//data received from ajax call stored here
let pokeData = {
    name: "",
    number: 0,
    hp: 0,
    defense: 0,
    attack: 0,
    abilities: [],
}

/*Class of Trainer - stores Pokemon objects. 
Method named all returns an array of Pokemon objects.
Method named get with one parameter called name, 
returns a Pokemon object housing information for the Pokemon it found*/

class Trainer {
    constructor(name) {
        this.name = name;
        this.pokemon = [];
    }

    function addPokemon(pokemon) {
        this.pokemon.push(Pokemon);
    }

    all() {
        return this.pokemon
    }

    get(pokemon) {
       
    } 

}



let oddish = {}
let gloom = {}
let weezing = {}


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


pokeContainer()



getPokemon("43")
getPokemon("44")
getPokemon("110")

let professor = new Trainer ("Professor Grim");


