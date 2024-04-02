import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';

//Decorator pattern
@Component({
  selector: 'app-pokemon-list ',
  standalone: true,
  imports: [CommonModule,PokemonDetailComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{
  pokemons!: Pokemon[];
  constructor(private pokemonService: PokemonService){

 
  }
  ngOnInit(): void {
      this.pokemonService.getPokemons().subscribe((data: Pokemon[])=>{
        console.log(data);
        this.pokemons = data;
      });
  }

  handleRemove(event: Pokemon){
    //handling the deletion logic here
    this.pokemons = this.pokemons.filter((pokemon : Pokemon)=>{
      return pokemon.id != event.id; //paves way for state immutability
    })
  }


}
