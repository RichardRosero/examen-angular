import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IDpokemon} from '../interfaces/pokemonInterface';
import { HttpClient } from '@angular/common/http';


const  API_GET_ALL_POKEMON= environment.API_GET_ALL_POKEMON
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }
  getAllPokemon(){
    return this.http.get<IDpokemon>(API_GET_ALL_POKEMON)
  }
}
