class Pokemon {
    constructor(pokehash) {
        this.obj = {name: pokehash.name, number: pokehash.number, hp: pokehash.hp, attack: pokehash.attack, defense: pokehash.defense, abilities: pokehash.abilities}

    }
        get() {
            professor.addPokemon(this.obj)
            return this.obj
        }
}
class Trainer {
    constructor() {
        this.pokemon = [];
    }

    addPokemon(pokemon) {
        this.pokemon.push(pokemon);
    }

    displayPokemon() {
        for (let i = 0; i < this.pokemon.length; i++)
        {console.log(this.pokemon[i])}
    }

}
let professor = new Trainer()
let getPokeData = function(idNumber){
    return $.ajax({
      method: 'GET',
      dataType: 'json',
      url: 'http://pokeapi.salestock.net/api/v2/pokemon' + idNumber,
      success: function(data){
        // console.log(data)
        let pokeData = {}
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


let oddishPoke = new Pokemon(getPokeData("/43/"))
let gloomPoke = new Pokemon(getPokeData("/44/"))
let weezingPoke = new Pokemon(getPokeData("/110/"))

professor.addPokemon(oddishPoke)
professor.addPokemon(gloomPoke)
professor.addPokemon(weezingPoke)
professor.displayPokemon()


  $("#oddishCircle").click(function(){
      function init(oddishPoke) {
      $("#oddishTitle").text(oddishPoke.name.toUpperCase());
      $("#oddishRevealCard").text(oddishPoke.name.toUpperCase());
      $("#oddishDefenseStat").text("Defense: " + oddishPoke.defense)
      $("#oddishAttackStat").text("Attack: " + oddishPoke.attack)
      $("#oddishHpStat").text("HP: " + oddishPoke.hp)
      $("#oddishAbilitiesStat").text("Abilities: " +oddishPoke.abilities[0].ability.name + ", " + oddishPoke.abilities[1].ability.name + ", " + oddishPoke.abilities[2].ability.name)
      $("#oddishTypesStat").text("Types: " + oddishPoke.types[0].type.name + ", " + oddishPoke.types[1].type.name)
  } init()
})

  $("gloomCircle").click(function(){
  
      function init(gloomPoke) {
      $("#gloomTitle").text(gloomPoke.name.toUpperCase());
      $("#gloomRevealCard").text(gloomPoke.name.toUpperCase());
      $("#gloomDefenseStat").text("Defense: " + gloomPoke.defense)
      $("#gloomAttackStat").text("Attack: " + gloomPoke.attack)
      $("#gloomHpStat").text("HP: " + gloomPoke.hp)
      $("#gloomAbilitiesStat").text("Abilities: " +gloomPoke.abilities[0].ability.name + ", " + gloomPoke.abilities[1].ability.name + ", " + gloomPoke.abilities[2].ability.name)
      $("#gloomTypesStat").text("Types: " + gloomPoke.types[0].type.name + ", " + gloomPoke.types[1].type.name)
  } init()
})

  $("#weezingCircle").click(function(){
  
      function init(weezingPoke) {
      $("#weezingTitle").text(weezingPoke.name.toUpperCase());
      $("#weezingRevealCard").text(weezingPoke.name.toUpperCase());
      $("#weezingDefenseStat").text("Defense: " + weezingPoke.defense)
      $("#weezingAttackStat").text("Attack: " + weezingPoke.attack)
      $("#weezingHpStat").text("HP: " + weezingPoke.hp)
      $("#weezingAbilitiesStat").text("Abilities: " +weezingPoke.abilities[0].ability.name + ", " + weezingPoke.abilities[1].ability.name + ", " + weezingPoke.abilities[2].ability.name)
      $("#weezingTypesInfo").text("Types: " + weezingPoke.types[0].type.name + ", " + weezingPoke.types[1].type.name)
  } init()
  })



