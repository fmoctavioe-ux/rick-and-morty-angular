import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // IMPORTANTE: Para que funcione el *ngFor en tu HTML
import { CharacterService } from './services/character'; // Importamos tu servicio

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Le damos permiso al HTML para usar directivas como *ngFor
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // (Si tienes un archivo de estilos distinto, pon su nombre aquí)
})
export class App implements OnInit {
  // 1. Aquí se guardará la lista de personajes
  characters: any[] = [];

  // 2. Llamamos al "mesero" (el servicio)
  constructor(private characterService: CharacterService) {}

  // 3. Esta función se ejecuta automáticamente en cuanto la página carga
  ngOnInit(): void {
    this.characterService.getCharacters().subscribe({
      next: (data: any) => {
        // LA CLAVE: La API de Rick and Morty manda los personajes dentro de un arreglo llamado "results"
        this.characters = data.results; 
        console.log('¡Personajes recibidos!', this.characters);
      },
      error: (error) => {
        console.error('Hubo un error al pedir los personajes:', error);
      }
    });
  }
}