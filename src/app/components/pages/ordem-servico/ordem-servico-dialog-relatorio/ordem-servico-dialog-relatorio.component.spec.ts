import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemServicoDialogRelatorioComponent } from './ordem-servico-dialog-relatorio.component';

describe('OrdemServicoDialogRelatorioComponent', () => {
  let component: OrdemServicoDialogRelatorioComponent;
  let fixture: ComponentFixture<OrdemServicoDialogRelatorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdemServicoDialogRelatorioComponent]
    });
    fixture = TestBed.createComponent(OrdemServicoDialogRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
