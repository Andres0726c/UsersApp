import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { MaterialModule } from '../material/material.module';

import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';




@NgModule({
  declarations: [
    UsuarioComponent,
    ListadoComponent,
    HomeComponent,
    BuscarComponent,
    AgregarComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
