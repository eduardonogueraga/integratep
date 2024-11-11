import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';

import { RouterOutlet,RouterModule } from '@angular/router';

@Component({
  selector: 'app-flashcards',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './flashcards.component.html',
  styleUrl: './flashcards.component.scss'
})
export class FlashcardsComponent {

  palabras: { palabraIndice: number; palabraEspanol: string; palabraIngles: string }[] = []; // Array para almacenar las palabras
  palabraActual: string = ''; // Palabra que se muestra actualmente (por defecto en inglés)
  mostrarEspanol: boolean = false; // Variable para controlar si mostrar el español
  index: number = 0; // Índice de la palabra actual

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarDatos(); // Cargar el JSON al iniciar el componente

    // Cambia al siguiente término cada 5 segundos
    /*
    interval(5000).subscribe(() => {
      this.mostrarSiguientePalabra();
    });
    */

  }

  cargarDatos(): void {
    this.http.get<{ palabraIndice: number; palabraEspanol: string; palabraIngles: string }[]>('/assets/flashcards/jsons/prueba.json').subscribe(
      (data) => {
        this.palabras = data;
        if (this.palabras.length > 0) {
          this.actualizarPalabraActual(); // Muestra la primera palabra en inglés al iniciar
        }
      },
      (error) => console.error('Error al cargar el JSON', error)
    );
  }

  actualizarPalabraActual(): void {
    const palabra = this.palabras[this.index];
    this.palabraActual = this.mostrarEspanol ? palabra.palabraEspanol : palabra.palabraIngles;
  }

  mostrarSiguientePalabra(): void {
    this.index = (this.index + 1) % this.palabras.length; // Cambia al siguiente índice
    this.mostrarEspanol = false; // Restablece para mostrar en inglés primero
    this.actualizarPalabraActual(); // Actualiza la palabra actual
  }

  setMostrarAyuda(valor: boolean): void {
    this.mostrarEspanol = valor; // Activa el modo para mostrar la palabra en español
    this.actualizarPalabraActual(); // Muestra la traducción en español
  }

  setMostrarAyudaToogle(): void {
    this.mostrarEspanol = !this.mostrarEspanol; // Activa el modo para mostrar la palabra en español
    this.actualizarPalabraActual(); // Muestra la traducción en español
  }

  

  // Función para aplicar el giro
  flipCard(): void {
    const cardElement = document.getElementById('card');
    if (cardElement) {
      cardElement.classList.toggle('flipped'); // Alterna la clase 'flipped' en el elemento
    }
  }

}
