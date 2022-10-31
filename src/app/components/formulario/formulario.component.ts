import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  formularioUsuario: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormularioComponent>,
    private fb: FormBuilder
  ) {
    this.formularioUsuario = this.fb.group(
      {
        nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
        apellidos: new FormControl('', [Validators.required, Validators.minLength(3)]),
        edad: new FormControl('', [Validators.required]),
        telefone: new FormControl('', [Validators.required]),
        direccion: new FormControl('', []),
        ciudad: new FormControl('', []),
        barrio: new FormControl('', []),
        nroPuerta: new FormControl(0, []),
      })
  }

  ngOnInit(): void {
  }

  agregarUsuario() {
    console.log(this.formularioUsuario);
  }

  confirmar() {
    this.dialogRef.close(this.formularioUsuario.value);
  }
}
