import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-alumnos',
  templateUrl: './form-alumnos.component.html',
  styleUrls: ['./form-alumnos.component.css']
})
export class FormAlumnosComponent implements OnInit {
  formularioUsuario: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { 
    this.formularioUsuario =fb.group({
      nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl('',[Validators.required, Validators.minLength(3)]),
      edad: new FormControl(0,[Validators.required]),
      telefone: new FormControl('',[Validators.required]),
      direccion:new FormControl('',[Validators.required]),
      ciudad: new FormControl('',[Validators.required]),
      barrio: new FormControl('',[Validators.required]),
      nroPuerta:new FormControl(0,[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  agregarUsuario(){
    console.log(this.formularioUsuario);
  }

}
