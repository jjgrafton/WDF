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

let getPokeData = function(idNumber){
    return $.ajax({
      method: 'GET',
      dataType: 'json',
      url: 'https://pokeapi.co/api/v2/pokemon' + idNumber,
      success: function(data){
        // console.log(data)
        pokeData.name = data.name;
        pokeData.id = data.id;
        pokeData.defenseTitle = data.stats[3].stat.name;
        pokeData.defense = data.stats[3].base_stat;
        pokeData.attackTitle = data.stats[4].stat.name;
        pokeData.attack = data.stats[4].base_stat;
        pokeData.hpTitle = data.stats[5].stat.name;
        pokeData.hp = data.stats[5].base_stat;
        pokeData.abilities = data.abilities;
        pokeData.types = data.types;
  
  },
  
  error: function() {
            alert('Error');
         }
  })
  }

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


  $("#oddishCircle").click(function(){
    var num43 = "/43/"
    var idNumber = num43
  
      getPokeData(idNumber).then(function(pokeData) {
      $("#oddishTitle").text(pokeData.name.toUpperCase());
      $("#oddishRevealCard").text(pokeData.name.toUpperCase());
      $("#oddishDefenseStat").text("Defense: " + pokeData.defense)
      $("#oddishAttackStat").text("Attack: " + pokeData.attack)
      $("#oddishHpStat").text("HP: " + pokeData.hp)
      $("#oddishAbilitiesStat").text("Abilities: " +pokeData.abilities[0].ability.name + ", " + pokemonData.abilities[1].ability.name + ", " + pokemonData.abilities[2].ability.name)
      $("#oddishTypesStat").text("Types: " + pokeData.types[0].type.name + ", " + pokemonData.types[1].type.name)
  })
  })

  $("gloomCircle").click(function(){
    var num43 = "/44/"
    var idNumber = num44
  
      getPokeData(idNumber).then(function(pokeData) {
      $("#gloomTitle").text(pokeData.name.toUpperCase());
      $("#gloomRevealCard").text(pokeData.name.toUpperCase());
      $("#gloomDefenseStat").text("Defense: " + pokeData.defense)
      $("#gloomAttackStat").text("Attack: " + pokeData.attack)
      $("#gloomHpStat").text("HP: " + pokeData.hp)
      $("#gloomAbilitiesStat").text("Abilities: " +pokeData.abilities[0].ability.name + ", " + pokemonData.abilities[1].ability.name + ", " + pokemonData.abilities[2].ability.name)
      $("#gloomTypesStat").text("Types: " + pokeData.types[0].type.name + ", " + pokemonData.types[1].type.name)
  })
  })

  $("#weezingCircle").click(function(){
    var num110 = "/110/"
    var idNumber = num110
  
      getPokeData(idNumber).then(function(pokeData) {
      $("#weezingTitle").text(pokeData.name.toUpperCase());
      $("#weezingRevealCard").text(pokeData.name.toUpperCase());
      $("#weezingDefenseStat").text("Defense: " + pokeData.defense)
      $("#weezingAttackStat").text("Attack: " + pokeData.attack)
      $("#weezingHpStat").text("HP: " + pokeData.hp)
      $("#weezingAbilitiesStat").text("Abilities: " +pokeData.abilities[0].ability.name + ", " + pokemonData.abilities[1].ability.name + ", " + pokemonData.abilities[2].ability.name)
      $("#weezingTypesInfo").text("Types: " + pokeData.types[0].type.name + ", " + pokemonData.types[1].type.name)
  })
  })