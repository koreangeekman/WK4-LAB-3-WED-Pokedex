import { AppState } from "../AppState.js";
import { pokedexService } from "../services/PokedexService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawPokedexList() {
  let contentHTML = '';
  AppState.pokedex.forEach(poke => contentHTML += `
      <p type="button" class="shadow" onclick="app.PokedexController.selectPokemon('${poke.name}')"><i class="mdi mdi-pokeball"></i> ${poke.name}</p>
  `);
  setHTML('pokemonList', contentHTML);
}

function _drawActivePokemon() {
  // @ts-ignore
  setHTML('activePokemon', AppState.activePokemon.activePokemonTemplate);
}

export class PokedexController {
  constructor() {
    AppState.on('account', pokedexService.getPokedex);
    AppState.on('pokedex', _drawPokedexList);
    AppState.on('activePokemon', _drawActivePokemon);
  }

  selectPokemon(name) {
    pokedexService.setPokemon(name);
  }

  nextPage() {
    pokedexService.nextPage()
  }

  priorPage() {
    pokedexService.priorPage()
  }

  capture(name) {

  }

}