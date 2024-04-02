import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { AppComponent } from "./app.component";
import { PokemonModule } from "./pokemon/pokemon.module";


@NgModule({
    declarations:[
        AppComponent
    ],
    imports:[
        PokemonModule
    ],
    providers:[],
    bootstrap:[AppComponent]

})

export class AppModule{}