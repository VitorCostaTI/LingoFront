import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomacoesMonitoramentoComponent } from './automacoes-monitoramento.component';

describe('AutomacoesMonitoramentoComponent', () => {
  let component: AutomacoesMonitoramentoComponent;
  let fixture: ComponentFixture<AutomacoesMonitoramentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomacoesMonitoramentoComponent]
    });
    fixture = TestBed.createComponent(AutomacoesMonitoramentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
