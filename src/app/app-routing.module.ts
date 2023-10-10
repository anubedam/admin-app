import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { ConsultaEmpresaComponent } from './pages/empresas/consulta-empresa/consulta-empresa.component';
import { AltaEmpresaComponent } from './pages/empresas/alta-empresa/alta-empresa.component';
import { BajaEmpresaComponent } from './pages/empresas/baja-empresa/baja-empresa.component';
import { ModificacionEmpresaComponent } from './pages/empresas/modificacion-empresa/modificacion-empresa.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
