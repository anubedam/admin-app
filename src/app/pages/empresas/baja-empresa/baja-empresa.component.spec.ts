import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaEmpresaComponent } from './baja-empresa.component';

describe('BajaEmpresaComponent', () => {
  let component: BajaEmpresaComponent;
  let fixture: ComponentFixture<BajaEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BajaEmpresaComponent]
    });
    fixture = TestBed.createComponent(BajaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
