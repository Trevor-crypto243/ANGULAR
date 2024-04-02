import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonService } from '../services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
  
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    PokemonListComponent,
    PokemonDetailComponent
  ],

  exports:[
    PokemonListComponent,
    PokemonDetailComponent 
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
