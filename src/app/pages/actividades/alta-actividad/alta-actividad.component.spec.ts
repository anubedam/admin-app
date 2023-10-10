import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AltaActividadComponent } from './alta-actividad.component';

describe('AltaActividadesComponent', () => {
  let component: AltaActividadComponent;
  let fixture: ComponentFixture<AltaActividadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaActividadComponent],
    });
    fixture = TestBed.createComponent(AltaActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
