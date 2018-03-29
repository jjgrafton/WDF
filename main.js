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
        return pokeData
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

let oddishPoke = new Pokemon(getPokeData("/43/"))
let gloomPoke = new Pokemon(getPokeData("/44/"))
let weezingPoke = new Pokemon(getPokeData("/110/"))

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
   
  
      function(oddishPoke) {
      $("#oddishTitle").text(oddishPoke.name.toUpperCase());
      $("#oddishRevealCard").text(oddishPoke.name.toUpperCase());
      $("#oddishDefenseStat").text("Defense: " + oddishPoke.defense)
      $("#oddishAttackStat").text("Attack: " + oddishPoke.attack)
      $("#oddishHpStat").text("HP: " + oddishPoke.hp)
      $("#oddishAbilitiesStat").text("Abilities: " +oddishPoke.abilities[0].ability.name + ", " + oddishPoke.abilities[1].ability.name + ", " + oddishPoke.abilities[2].ability.name)
      $("#oddishTypesStat").text("Types: " + oddishPoke.types[0].type.name + ", " + oddishPoke.types[1].type.name)
  })

  $("gloomCircle").click(function(){
  
      (function(gloomPoke) {
      $("#gloomTitle").text(gloomPoke.name.toUpperCase());
      $("#gloomRevealCard").text(gloomPoke.name.toUpperCase());
      $("#gloomDefenseStat").text("Defense: " + gloomPoke.defense)
      $("#gloomAttackStat").text("Attack: " + gloomPoke.attack)
      $("#gloomHpStat").text("HP: " + gloomPoke.hp)
      $("#gloomAbilitiesStat").text("Abilities: " +gloomPoke.abilities[0].ability.name + ", " + gloomPoke.abilities[1].ability.name + ", " + gloomPoke.abilities[2].ability.name)
      $("#gloomTypesStat").text("Types: " + gloomPoke.types[0].type.name + ", " + gloomPoke.types[1].type.name)
  })
  })

  $("#weezingCircle").click(function(){
  
      (function(pokeData) {
      $("#weezingTitle").text(weezingPoke.name.toUpperCase());
      $("#weezingRevealCard").text(weezingPoke.name.toUpperCase());
      $("#weezingDefenseStat").text("Defense: " + weezingPoke.defense)
      $("#weezingAttackStat").text("Attack: " + weezingPoke.attack)
      $("#weezingHpStat").text("HP: " + weezingPoke.hp)
      $("#weezingAbilitiesStat").text("Abilities: " +weezingPoke.abilities[0].ability.name + ", " + weezingPoke.abilities[1].ability.name + ", " + weezingPoke.abilities[2].ability.name)
      $("#weezingTypesInfo").text("Types: " + weezingPoke.types[0].type.name + ", " + weezingPoke.types[1].type.name)
  })
  })

  getPokeData();
