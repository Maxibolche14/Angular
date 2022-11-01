import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FormularioComponent } from '../formulario/formulario.component';
import { ListaAlumnos } from '../models/ListaAlumnos';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
  
})
export class AlumnosComponent implements OnInit {
  
  listaNombres: ListaAlumnos[] = [
    
    { id:1,nombre: 'Maxi', apellidos: 'Piñero', edad: 32, telefone: '091072566', direccion: 'Chana', ciudad: 'Montevideo', barrio: 'Cordon', nroPuerta: 2236 },
    { id:2,nombre: 'Vane', apellidos: 'Tavolara', edad: 25, telefone: '091072566', direccion: 'Chana', ciudad: 'Montevideo', barrio: 'Cordon', nroPuerta: 2236 },
    { id:3,nombre: 'Maria Paz', apellidos: 'Piñero', edad: 0.4, telefone: '091072566', direccion: 'Chana', ciudad: 'Montevideo', barrio: 'Cordon', nroPuerta: 2236 },
    { id:4,nombre: 'Luciano', apellidos: 'Piñero', edad: 19, telefone: '091072566', direccion: 'Bv Artigas', ciudad: 'Florida', barrio: '25 de Mayo', nroPuerta: 851 },
    { id:5,nombre: 'Gaston', apellidos: 'Piñero', edad: 28, telefone: '091072566', direccion: 'Bv Artigas', ciudad: 'Florida', barrio: '25 de Mayo', nroPuerta: 851 },
    { id:6,nombre: 'Juan Pablo', apellidos: 'Pñero', edad: 4, telefone: '091072566', direccion: 'Bv Artigas', ciudad: 'Florida', barrio: '25 de Mayo', nroPuerta: 851 },
    
  ];
  dataSourceInicial = this.listaNombres

  columnas: string[] = ['id','nombre', 'apellidos', 'edad', 'telefone', 'direccion', 'ciudad', 'barrio', 'nroPuerta','Acciones'];
  dataSource: MatTableDataSource<ListaAlumnos> = new MatTableDataSource<ListaAlumnos>(this.listaNombres);

  fecha: Date = new Date();

  constructor(
    public dialog: MatDialog
  ) { 
  }

  ngOnInit(): void {
    this.dataSource.data = this.dataSourceInicial
  }
  
  //Funcion para Filtrar por cualquier dato que ingrese
  filtrar(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;

    this.dataSource.filter = valorObtenido.trim();
  }

//Funcion para borrar por posicion que seleccione
  borrar(id:number){
    const position = this.listaNombres.findIndex(persona => persona.id == id)
    this.listaNombres.splice(position,1)
    this.dataSource.data = this.dataSourceInicial
    
  }

  openDialog(){
    let dialog = this.dialog.open(FormularioComponent, {
     width: '70%',
     height: '80%',
    });

    dialog.beforeClosed().subscribe(res => {
      console.log(res);
      this.listaNombres.push(
        {
          ...res,
          id:this.listaNombres.length+1
        }
      )
      console.log(this.listaNombres);
      this.dataSource.data = this.dataSourceInicial
    })
  }
}
