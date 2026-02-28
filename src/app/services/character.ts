import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  
  // 1. La dirección exacta de la base de datos de Rick and Morty
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  // 2. Le entregamos el teléfono (HttpClient) al mesero
  constructor(private http: HttpClient) { }

  // 3. La función que hace la llamada para traer a los personajes
  getCharacters() {
    return this.http.get(this.apiUrl);
  }
}