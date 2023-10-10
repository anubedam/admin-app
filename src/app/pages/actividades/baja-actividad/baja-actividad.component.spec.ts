import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BajaActividadComponent } from './baja-actividad.component';

describe('BajaActividadComponent', () => {
  let component: BajaActividadComponent;
  let fixture: ComponentFixture<BajaActividadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BajaActividadComponent],
    });
    fixture = TestBed.createComponent(BajaActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
