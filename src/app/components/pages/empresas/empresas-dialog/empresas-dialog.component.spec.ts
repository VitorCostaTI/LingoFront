import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasUpdateDialogComponent } from './empresas-dialog.component';

describe('EmpresasUpdateDialogComponent', () => {
  let component: EmpresasUpdateDialogComponent;
  let fixture: ComponentFixture<EmpresasUpdateDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpresasUpdateDialogComponent]
    });
    fixture = TestBed.createComponent(EmpresasUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
