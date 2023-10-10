import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemServicoDialogFinishComponent } from './ordem-servico-dialog-finish.component';

describe('OrdemServicoDialogFinishComponent', () => {
  let component: OrdemServicoDialogFinishComponent;
  let fixture: ComponentFixture<OrdemServicoDialogFinishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdemServicoDialogFinishComponent]
    });
    fixture = TestBed.createComponent(OrdemServicoDialogFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
