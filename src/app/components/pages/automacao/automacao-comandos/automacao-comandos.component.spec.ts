import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomacaoComandosComponent } from './automacao-comandos.component';

describe('AutomacaoComandosComponent', () => {
  let component: AutomacaoComandosComponent;
  let fixture: ComponentFixture<AutomacaoComandosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomacaoComandosComponent]
    });
    fixture = TestBed.createComponent(AutomacaoComandosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
