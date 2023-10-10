import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActividadesComponent } from './actividad.component';
import { ConsultaActividadComponent } from './consulta-actividad/consulta-actividad.component';
import { AltaActividadComponent } from './alta-actividad/alta-actividad.component';
import { BajaActividadComponent } from './baja-actividad/baja-actividad.component';
import { ModificacionActividadComponent } from './modificacion-actividad/modificacion-actividad.component';

@NgModule({
  declarations: [
    ActividadesComponent,
    ConsultaActividadComponent,
    AltaActividadComponent,
    BajaActividadComponent,
    ModificacionActividadComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class ActividadModule {}
