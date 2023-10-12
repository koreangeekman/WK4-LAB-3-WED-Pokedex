import { AppState } from "../AppState.js";
import { sandboxService } from "../services/SandboxService.js";
import { setHTML } from "../utils/Writer.js";

function _drawMyPokedex() {
  let contentHTML = '';
  AppState.myPokedex.forEach(poke => contentHTML += `
      <p type="button" class="shadow" onclick="app.PokedexController.selectPokemon('${poke.name}')"><i class="mdi mdi-pokeball"></i> ${poke.name}</p>
  `)
  setHTML('myPokedexList', contentHTML);
}

export class SandboxController {
  constructor() {
    AppState.on('account', sandboxService.getMyPokedex)
    AppState.on('myPokedex', _drawMyPokedex)
  }

  capture() {
    sandboxService.capture();
  }
}