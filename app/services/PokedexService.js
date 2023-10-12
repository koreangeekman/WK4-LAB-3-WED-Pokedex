import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { Pop } from "../utils/Pop.js";
import { api, pokiApi } from "./AxiosService.js";

// function _saveData() {
//   saveState('myPokedex', AppState.myPokedex)
// }


class PokedexService {

  async getPokedex() {
    try {
      const res = await pokiApi.get('pokemon')
      AppState.pokedex = res.data.results
    } catch (error) {
      console.error('get Pokedex', error);
    }
  }

  async setPokemon(name) {
    try {
      const res = await pokiApi.get(`pokemon/${name}`)
      // @ts-ignore
      AppState.activePokemon = new Pokemon(res.data);
    } catch (error) {
      console.error('set pokemon', error);
    }
  }

  nextPage() {

  }
  priorPage() {

  }

}

export const pokedexService = new PokedexService();