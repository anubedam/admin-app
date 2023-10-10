import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificacionActividadComponent } from './modificacion-actividad.component';

describe('ModificacionActividadComponent', () => {
  let component: ModificacionActividadComponent;
  let fixture: ComponentFixture<ModificacionActividadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificacionActividadComponent],
    });
    fixture = TestBed.createComponent(ModificacionActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
