import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { Pokemon } from '../../models/pokemon';

//Decorator pattern
@Component({
  selector: 'app-pokemon-list ',
  standalone: true,
  imports: [CommonModule,PokemonDetailComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{
  pokemons: Pokemon[] = [
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
  ];

  constructor(){
 
  }
  ngOnInit(): void {
      
  }

  handleRemove(event: Pokemon){
    //handling the deletion logic here
    this.pokemons = this.pokemons.filter((pokemon : Pokemon)=>{
      return pokemon.id != event.id; //paves way for state immutability
    })
  }


}
