import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemServicoDialogUpdateComponent } from './ordem-servico-dialog-update.component';

describe('OrdemServicoDialogUpdateComponent', () => {
  let component: OrdemServicoDialogUpdateComponent;
  let fixture: ComponentFixture<OrdemServicoDialogUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdemServicoDialogUpdateComponent]
    });
    fixture = TestBed.createComponent(OrdemServicoDialogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});