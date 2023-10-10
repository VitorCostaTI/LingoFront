import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemServicoDialogAddComponent } from './ordem-servico-dialog-add.component';

describe('OrdemServicoDialogAddComponent', () => {
  let component: OrdemServicoDialogAddComponent;
  let fixture: ComponentFixture<OrdemServicoDialogAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdemServicoDialogAddComponent]
    });
    fixture = TestBed.createComponent(OrdemServicoDialogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
