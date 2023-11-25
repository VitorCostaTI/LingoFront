import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissaoAcessoComponent } from './permissao-acesso.component';

describe('PermissaoAcessoComponent', () => {
  let component: PermissaoAcessoComponent;
  let fixture: ComponentFixture<PermissaoAcessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermissaoAcessoComponent]
    });
    fixture = TestBed.createComponent(PermissaoAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});