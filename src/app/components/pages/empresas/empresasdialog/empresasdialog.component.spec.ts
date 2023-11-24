import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasdialogComponent } from './empresasdialog.component';

describe('EmpresasdialogComponent', () => {
  let component: EmpresasdialogComponent;
  let fixture: ComponentFixture<EmpresasdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresasdialogComponent]
    });
    fixture = TestBed.createComponent(EmpresasdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});