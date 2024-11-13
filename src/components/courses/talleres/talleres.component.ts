import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-talleres',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './talleres.component.html',
  styleUrl: './talleres.component.scss'
})

export class TalleresComponent {

  talleres: { 
    title: string; 
    instructor: string; 
    image: string; 
    description: string; 
  }[] = [
    { 
      title: 'Conociendo la Cultura Española', 
      instructor: 'Ana Martínez', 
      image: 'ruta-imagen-1.jpg',
      description: 'Explora las costumbres y tradiciones de España.' 
    },
    { 
      title: 'Derechos y Deberes para Nuevos Ciudadanos', 
      instructor: 'José López', 
      image: 'ruta-imagen-2.jpg',
      description: 'Aprende sobre tus derechos y obligaciones en España.'
    },
    { 
      title: 'Orientación Laboral y Búsqueda de Empleo', 
      instructor: 'Laura García', 
      image: 'ruta-imagen-3.jpg',
      description: 'Consejos para integrarte en el mercado laboral español.'
    },
    { 
      title: 'Acceso a la Vivienda en España', 
      instructor: 'María Fernández', 
      image: 'ruta-imagen-4.jpg',
      description: 'Información sobre cómo acceder a una vivienda en España.'
    },
    { 
      title: 'Aprendiendo Español: Comunicación Básica', 
      instructor: 'Carlos Sánchez', 
      image: 'ruta-imagen-5.jpg',
      description: 'Curso de español para mejorar tu comunicación diaria.'
    },
    { 
      title: 'Sistema Educativo Español: Guía para Familias', 
      instructor: 'Marta Ruiz', 
      image: 'ruta-imagen-6.jpg',
      description: 'Descubre cómo funciona el sistema educativo en España.'
    },
    { 
      title: 'Recursos Sociales y Servicios Comunitarios', 
      instructor: 'Elena Morales', 
      image: 'ruta-imagen-7.jpg',
      description: 'Conoce los recursos sociales disponibles para ti.'
    },
    { 
      title: 'Integración Social y Relaciones Interculturales', 
      instructor: 'Pedro Martínez', 
      image: 'ruta-imagen-8.jpg',
      description: 'Fomenta la integración y el respeto intercultural.'
    },
    { 
      title: 'Empoderamiento y Derechos de las Mujeres Inmigrantes', 
      instructor: 'Isabel Gómez', 
      image: 'ruta-imagen-9.jpg',
      description: 'Apoyo y empoderamiento para mujeres inmigrantes.'
    },
    { 
      title: 'Acceso a la Sanidad y Servicios de Salud', 
      instructor: 'Raúl Pérez', 
      image: 'ruta-imagen-10.jpg',
      description: 'Aprende cómo acceder al sistema de salud español.'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

}

