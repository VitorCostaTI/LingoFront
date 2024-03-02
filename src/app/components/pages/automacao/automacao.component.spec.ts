import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomacaoComponent } from './automacao.component';

describe('AutomacaoComponent', () => {
  let component: AutomacaoComponent;
  let fixture: ComponentFixture<AutomacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomacaoComponent]
    });
    fixture = TestBed.createComponent(AutomacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
