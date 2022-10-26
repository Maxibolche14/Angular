import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListaAlumnos } from '../models/ListaAlumnos';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  
  listaNombres: ListaAlumnos[] = [
    
    { nombre: 'Maxi', apellidos: 'Piñero', edad: 32, telefone: '091072566', direccion: 'Chana', ciudad: 'Montevideo', barrio: 'Cordon', nroPuerta: 2236 },
    { nombre: 'Vane', apellidos: 'Tavolara', edad: 25, telefone: '091072566', direccion: 'Chana', ciudad: 'Montevideo', barrio: 'Cordon', nroPuerta: 2236 },
    { nombre: 'Maria Paz', apellidos: 'Piñero', edad: 0.4, telefone: '091072566', direccion: 'Chana', ciudad: 'Montevideo', barrio: 'Cordon', nroPuerta: 2236 },
    { nombre: 'Luciano', apellidos: 'Piñero', edad: 19, telefone: '091072566', direccion: 'Bv Artigas', ciudad: 'Florida', barrio: '25 de Mayo', nroPuerta: 851 },
    { nombre: 'Gaston', apellidos: 'Piñero', edad: 28, telefone: '091072566', direccion: 'Bv Artigas', ciudad: 'Florida', barrio: '25 de Mayo', nroPuerta: 851 },
    { nombre: 'Juan Pablo', apellidos: 'Pñero', edad: 4, telefone: '091072566', direccion: 'Bv Artigas', ciudad: 'Florida', barrio: '25 de Mayo', nroPuerta: 851 },
    
  ];
  
  columnas: string[] = ['nombre', 'apellidos', 'edad', 'telefone', 'direccion', 'ciudad', 'barrio', 'nroPuerta','Acciones'];
  dataSource: MatTableDataSource<ListaAlumnos> = new MatTableDataSource<ListaAlumnos>(this.listaNombres);

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }
  
  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;

    this.dataSource.filter = valorObtenido.trim();
  }
}
