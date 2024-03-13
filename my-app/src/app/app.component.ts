import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
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
