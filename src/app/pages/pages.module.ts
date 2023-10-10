import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasModule } from './empresas/empresas.module';
import { ActividadModule } from './actividades/actividad.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, EmpresasModule, ActividadModule],
})
export class PagesModule {}
