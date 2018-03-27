//Pokemon constructor to take data from ajax call
class Pokemon {
    constructor(number, hp, attack, defense, abilities) {
        this.number = number
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.abilities = abilities
    }
}

/*Need to add: 
- move related information
- priority
- power
- accuracy*/

/*Class of trainer to store Pokemon objects, have a method named all to return an array of Pokemon objects, have a method named get with one parameter called name, returns a Pokemon object housing information for the Pokemon it found*/

class Trainer {
    constructor(name, pokemon) {
        this.name = name;
        this.pokemon = [];
    }

    all() {
        return this.pokemon
    }

    get(pokemon) {
        let collection = this.pokemon.filter(function (character) {
            return character.name === pokemon
        })
        return collection.length === 1 ? collection[0] : collection
    } //need to find out exactly how this works

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

//ajax call - parameter is pokemon ID
function getPokemon(idNumber) {
    //must return the result of the ajax call
    return $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + idNumber,
        success: function (data) {
            //populate the pokeData with the ajax data
            pokeData.name = data.name
            pokeData.number = data.id //look up this stat
            pokeData.hp = data.stats[5].base_stat
            pokeData.defense = data.stats[3].base_stat
            pokeData.attack = data.stats[4].base_stat
            pokeData.abilities = data.
            //go through abilities and display

            //create a new pokemon
            let pokemon = new Pokemon(pokeData)
            //clear the array of stats so that it's specific to the pokemon (REFACTOR?)
            //return the pokemon
            pokeArray.push(pokemon)
            console.log(pokemon)
        },
        error: function (error) {
            console.log(error)
        }
    })
}

let oddish = {}
let gloom = {}
let weezing = {}
let pokeArray = []
let professor = undefined


pokeContainer = (pokemon) => {
    let name = pokemon.name

    //div for all individual pokemon data
    let pokeDivr = $("<div/>").addClass("pokemon-character", name)

    //values pulled from Pokemon object and displayed in new HTML elements
    let name = $("<h2/>").text("Name: " + (pokemon.name))
    let pokemonNumber = $("<h3/>").text(pokemon.number)
    let attack = $("<p/>").text("Attack: " + (pokemon.attack))
    let defense = $("<p/>").text("Defense: " + (pokemon.defense))
    let hp = $("<p/>").text("HP: " + (pokemon.hp))


    //create abilities list
    let abilitiesList = $("<ul/>").addClass("ability-list")
    /*pokemon.abilities.forEach((ability) => {
        if (ability.isHidden) {
            $("<li/>").text(ability.name).addClass("hidden-ability").appendTo(abilitiesList)
        }
        $("<li/>").text(ability.name).appendTo(abilitiesList)
    })*/




}


// pokeContainer()



//each function call will create a new pokemon. must use the .done() callback in order to only push the pokemon into the slave array once the ajax call has completed and the pokemon has been initialized (then the next pokemon, and the next)
getPokemon("43").done(getPokemon("44")).done(getPokemon("110")).done(function (result) {
    //once you have all of your pokemon, you can initialize a new trainer with your pokemon array
    despot = new Trainer("Despot", pokeArray)
})
// .done(function(result){
//     let char = despot.get("charmander")
//     pokeContainer(char)
//     })
