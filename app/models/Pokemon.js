
export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.url = data.url
  }
}

// count: 1292
// next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
// results: {
// previous: null
// name: "bulbasaur"
// url: "https://pokeapi.co/api/v2/pokemon/1/"
// }



// https://sandbox.codeworksacademy.com/api/pokemon
//  name: ''
//  nickName: ''
//  img: ''
//  weight: ''
//  height: ''
//  types: {}
//  creatorID: {}
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
//     "creatorId": {
//     "type": "ObjectId",
//       "required": true,
//         "ref": "Account"
//   }
// }