import { AppState } from "../AppState.js";
import { saveState } from "../utils/Store.js";
import { api } from "./AxiosService.js";

function _saveMyPokedex() {
  saveState('myPokedex', AppState.myPokedex)
}

class SandboxService {

  async getMyPokedex() {
    try {
      // const res = await new api.get('pokemon');
      // console.log(res.data);
    } catch (error) {
      console.error('get my pokedex', error);
    }
  }

  capture() {

    _saveMyPokedex();
  }
}


export const sandboxService = new SandboxService();