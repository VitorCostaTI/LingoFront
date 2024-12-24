import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomacaoDispositivosComponent } from './automacao-dispositivos.component';

describe('AutomacaoDispositivosComponent', () => {
  let component: AutomacaoDispositivosComponent;
  let fixture: ComponentFixture<AutomacaoDispositivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomacaoDispositivosComponent]
    });
    fixture = TestBed.createComponent(AutomacaoDispositivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
