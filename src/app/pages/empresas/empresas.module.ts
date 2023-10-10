import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from './empresas.component';
import { ConsultaEmpresaComponent } from './consulta-empresa/consulta-empresa.component';
import { AltaEmpresaComponent } from './alta-empresa/alta-empresa.component';
import { BajaEmpresaComponent } from './baja-empresa/baja-empresa.component';
import { ModificacionEmpresaComponent } from './modificacion-empresa/modificacion-empresa.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EmpresasComponent,
    ConsultaEmpresaComponent,
    AltaEmpresaComponent,
    BajaEmpresaComponent,
    ModificacionEmpresaComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class EmpresasModule {}
