import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDialogUpdateComponent } from './usuario-dialog.component';

describe('UsuarioDialogUpdateComponent', () => {
  let component: UsuarioDialogUpdateComponent;
  let fixture: ComponentFixture<UsuarioDialogUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioDialogUpdateComponent]
    });
    fixture = TestBed.createComponent(UsuarioDialogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
