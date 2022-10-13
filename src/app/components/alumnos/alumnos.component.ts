import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  
  listaNombres: Array<Persona> = [
    
    { nombre: 'Maxi', apellidos: 'Piñero', edad: 32, telefone: '091072566', direccion: 'Chana', ciudad: 'Montevideo', barrio: 'Cordon', nroPuerta: 2236 },
    { nombre: 'Vane', apellidos: 'Tavolara', edad: 25, telefone: '091072566', direccion: 'Chana', ciudad: 'Montevideo', barrio: 'Cordon', nroPuerta: 2236 },
    { nombre: 'Maria Paz', apellidos: 'Piñero', edad: 0.4, telefone: '091072566', direccion: 'Chana', ciudad: 'Montevideo', barrio: 'Cordon', nroPuerta: 2236 },
    { nombre: 'Luciano', apellidos: 'Piñero', edad: 19, telefone: '091072566', direccion: 'Bv Artigas', ciudad: 'Florida', barrio: '25 de Mayo', nroPuerta: 851 },
    { nombre: 'Gaston', apellidos: 'Piñero', edad: 28, telefone: '091072566', direccion: 'Bv Artigas', ciudad: 'Florida', barrio: '25 de Mayo', nroPuerta: 851 },
    { nombre: 'Juan Pablo', apellidos: 'Pñero', edad: 4, telefone: '091072566', direccion: 'Bv Artigas', ciudad: 'Florida', barrio: '25 de Mayo', nroPuerta: 851 },
    
  ];
  

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
