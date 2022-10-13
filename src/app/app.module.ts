import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormAlumnosComponent } from './components/form-alumnos/form-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ProductosComponent,
    NabvarComponent,
    ToolbarComponent,
    AlumnosComponent,
    FormAlumnosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
