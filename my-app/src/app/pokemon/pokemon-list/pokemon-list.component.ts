import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

//Decorator pattern
@Component({
  selector: 'app-pokemon-list ',
  standalone: true,
  imports: [CommonModule,PokemonDetailComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{
  pokemons: any[] = [
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
      isCool: false,
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


}
