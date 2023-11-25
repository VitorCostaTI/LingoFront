import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissaoAcessoDialogComponent } from './permissao-acesso-dialog.component';

describe('PermissaoAcessoDialogComponent', () => {
  let component: PermissaoAcessoDialogComponent;
  let fixture: ComponentFixture<PermissaoAcessoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermissaoAcessoDialogComponent]
    });
    fixture = TestBed.createComponent(PermissaoAcessoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});