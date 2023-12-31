import { Pokemon } from "./models/Pokemon.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { isValidProp } from './utils/IsValidProp.js'
import { loadState } from './utils/Store.js'

class ObservableAppState extends EventEmitter {
  page = ''

  user = null

  /** @type {import('./models/Account.js').Account | null} */
  // @ts-ignore

  account = null

  socketData = []

  // SECTION ADDT'L GLOBAL VARIABLES

  pokedex = []

  activePokemon = null

  myPokedex = []

  // !SECTION ADDT'L GLOBAL VARIABLES

  // Used to load initial data
  init() {
    // this.myPokedex = loadState('myPokedex', Pokemon)
  }
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})