import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

constructor() { }

getPokemons() : Pokemon[]{
  return [
    {
      id:1,
      name:'pikachu',
      type:'electric',
      isCool: false,
      isStylish: true
    },
    {
      id:2,
      name:'pikachu',
      type:'electric',
      isCool: true,
      isStylish: true
    },
    {
      id:3,
      name:'pikachu',
      type:'electric',
      isCool: false,
      isStylish: true
    }
  ]

}
}
