import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { ConsultaEmpresaComponent } from './pages/empresas/consulta-empresa/consulta-empresa.component';
import { AltaEmpresaComponent } from './pages/empresas/alta-empresa/alta-empresa.component';
import { BajaEmpresaComponent } from './pages/empresas/baja-empresa/baja-empresa.component';
import { ModificacionEmpresaComponent } from './pages/empresas/modificacion-empresa/modificacion-empresa.component';
import { ActividadesComponent } from './pages/actividades/actividad.component';
import { ConsultaActividadComponent } from './pages/actividades/consulta-actividad/consulta-actividad.component';
import { AltaActividadComponent } from './pages/actividades/alta-actividad/alta-actividad.component';
import { BajaActividadComponent } from './pages/actividades/baja-actividad/baja-actividad.component';
import { ModificacionActividadComponent } from './pages/actividades/modificacion-actividad/modificacion-actividad.component';

const routes: Routes = [
  {
    path: 'empresas',
    component: EmpresasComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ConsultaEmpresaComponent,
      },
      {
        path: 'alta/:id',
        component: AltaEmpresaComponent,
      },
      {
        path: 'baja/:id',
        component: BajaEmpresaComponent,
      },
      {
        path: 'modificacion/:id',
        component: ModificacionEmpresaComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
  {
    path: 'actividades',
    component: ActividadesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ConsultaActividadComponent,
      },
      {
        path: 'alta/:id',
        component: AltaActividadComponent,
      },
      {
        path: 'baja/:id',
        component: BajaActividadComponent,
      },
      {
        path: 'modificacion/:id',
        component: ModificacionActividadComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
