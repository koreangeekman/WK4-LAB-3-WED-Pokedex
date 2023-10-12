import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { saveState } from "../utils/Store.js";
import { api } from "./AxiosService.js";

function _saveMyPokedex() {
  saveState('myPokedex', AppState.myPokedex)
}

class SandboxService {

  async getMyPokedex() {
    try {
      const res = await api.get('api/pokemon');
      AppState.myPokedex = res.data;
    } catch (error) {
      console.error('get my pokedex', error);
    }
  }

  async capture() {
    try {
      const res = await api.post('api/pokemon', AppState.activePokemon);
      console.log('captured', res.data);
      console.log('response packaged', new Pokemon(res.data));
      AppState.myPokedex.push(new Pokemon(res.data));
      AppState.emit('myPokedex');
      _saveMyPokedex();
    } catch (error) {
      console.error('sandbox service - capture attempt', error);
    }
  }
}


export const sandboxService = new SandboxService();