import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from './services/character';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  // Aquí guardaremos a los personajes cuando lleguen
  characters: any[] = [];
  // Nuestro interruptor para el mensaje de "Cargando..."
  isLoading = true;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    // Llamamos al mesero
    this.characterService.getCharacters().subscribe((data: any) => {
      // ¡Aquí está la magia! Le decimos que saque los datos de la caja "results"
      this.characters = data.results; 
      // Apagamos el mensaje de "Cargando..."
      this.isLoading = false;
    });
  }
}