
export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickName = data.nickName || ''
    this.img = data.img || data.sprites?.other.dream_world.front_default || ''
    this.weight = data.weight || ''
    this.height = data.height || ''
    this.types = data.types || []
    this.creator = data.creator || {}
    this.creatorId = data.creatorId || ''
  }

  get activePokemonTemplate() {
    return `
        <div class="card w-100 d-flex">
          <div class="cardTitle align-self-center fs-1 px-5 py-2">${this.name}</div>
        </div>
        <img class="align-self-center p-5 img-flex pokemonImg" src="${this.img}" alt="pokemonNAME">
        <div class="card p-3 fs-5 d-flex">
          <span class="cardData m-2 d-flex justify-content-between flex-wrap p-2">
            <p class="w-50">Height: ${this.height}</p>
            <p class="w-50">Weight: ${this.weight}</p>
            <p class="w-50">Types: ${this.types[0]?.type.name}</p>
          </span>
          <button class="btn btn-primary fs-4 m-2 align-self-end"
            onclick="app.SandboxController.capture()">
            <i class="mdi mdi-pokeball"></i> Catch</button>
        </div>
    `
  }
}

// https://sandbox.codeworksacademy.com/api/pokemon
//  name: ''
//  nickName: ''
//  img: ''
//  weight: ''
//  height: ''
//  types: {}
//  creatorId: {}
//
//
// {
//   "name": {
//     "type": "String",
//       "required": true,
//         "maxLength": 100
//   },
//   "nickName": {
//     "type": "String",
//       "maxLength": 100
//   },
//   "img": {
//     "type": "String",
//       "required": true,
//         "maxLength": 500
//   },
//   "weight": {
//     "type": "String",
//       "maxLength": 100
//   },
//   "height": {
//     "type": "String",
//       "maxLength": 100
//   },
//   "types": [
//     {}
//   ],
//    "creatorId": {
//        "type": "ObjectId",
//        "required": true,
//        "ref": "Account"
//   }
// }

// count: 1292
// next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
// results: {
// previous: null
// name: "bulbasaur"
// url: "https://pokeapi.co/api/v2/pokemon/1/"
// }

const temp = {
  "abilities": [],
  "base_experience": 64,
  "forms": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon-form/1/"
    }
  ],
  "height": 7,
  "held_items": [],
  "id": 1,
  "is_default": true,
  "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/1/encounters",
  "moves": [],
  "name": "bulbasaur",
  "order": 1,
  "past_types": [],
  "species": {
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
  },
  "stats": [
    {
      "base_stat": 45,
      "effort": 0,
      "stat": {
        "name": "hp",
        "url": "https://pokeapi.co/api/v2/stat/1/"
      }
    },
    {
      "base_stat": 49,
      "effort": 0,
      "stat": {
        "name": "attack",
        "url": "https://pokeapi.co/api/v2/stat/2/"
      }
    },
    {
      "base_stat": 49,
      "effort": 0,
      "stat": {
        "name": "defense",
        "url": "https://pokeapi.co/api/v2/stat/3/"
      }
    },
    {
      "base_stat": 65,
      "effort": 1,
      "stat": {
        "name": "special-attack",
        "url": "https://pokeapi.co/api/v2/stat/4/"
      }
    },
    {
      "base_stat": 65,
      "effort": 0,
      "stat": {
        "name": "special-defense",
        "url": "https://pokeapi.co/api/v2/stat/5/"
      }
    },
    {
      "base_stat": 45,
      "effort": 0,
      "stat": {
        "name": "speed",
        "url": "https://pokeapi.co/api/v2/stat/6/"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  "weight": 69
}

