import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionEmpresaComponent } from './modificacion-empresa.component';

describe('ModificacionEmpresaComponent', () => {
  let component: ModificacionEmpresaComponent;
  let fixture: ComponentFixture<ModificacionEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificacionEmpresaComponent]
    });
    fixture = TestBed.createComponent(ModificacionEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
