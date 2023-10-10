import { Component, OnInit } from '@angular/core';
import { MenuOpcion } from './interfaces/menu-opcion.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  MenuOpciones: MenuOpcion[] = [];

  ngOnInit(): void {
    this.MenuOpciones = [
      { texto: 'Empresas', url: '/empresas', icono: '' },
      { texto: 'Actividades', url: '/actividades', icono: '' },
    ];
  }
}
