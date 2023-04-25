import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { IdDatapokemon,IDpokemon } from '../interfaces/pokemonInterface';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-pantalla-examen',
  templateUrl: './pantalla-examen.component.html',
  styleUrls: ['./pantalla-examen.component.css'],
  providers: [MessageService]
})
export class PantallaExamenComponent implements OnInit{
  listaPokemon: IdDatapokemon[]= [];
  constructor (private rutas: Router,
              private pokemonServicio: PokemonService,
              private mensajes: MessageService){

              }
 ngOnInit(): void{
  console.log('hola estoy desde ngOninit');

  this.pokemonServicio.getAllPokemon().subscribe(
   {
    next: (res)=> {
      console.log(res);
      this.listaPokemon = res.results;
      this.mensajes.add({ severity: 'success', summary: 'Success', detail: 'exito' });
      }, 
    error: (error)=>{
        console.log(error)
        this.mensajes.add({ severity: 'error', summary: 'error', detail: 'problemas' });
      }
    
   }
    );
  

}
}
