import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasDialogComponent } from './empresas-dialog.component';

describe('EmpresasDialogComponent', () => {
  let component: EmpresasDialogComponent;
  let fixture: ComponentFixture<EmpresasDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresasDialogComponent]
    });
    fixture = TestBed.createComponent(EmpresasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});