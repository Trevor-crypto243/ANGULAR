import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,PokemonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string;
  ex:string = "Ashley";
  pokemonName:string ="";

  constructor(){
    this.title = "Learning Angular for Cloud It";
  }

  handleClick(value: any){
    console.log(value)
  }
}
