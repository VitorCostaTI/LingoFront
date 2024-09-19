import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomacoesControlTimeComponent } from './automacoes-control-time.component';

describe('AutomacoesControlTimeComponent', () => {
  let component: AutomacoesControlTimeComponent;
  let fixture: ComponentFixture<AutomacoesControlTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomacoesControlTimeComponent]
    });
    fixture = TestBed.createComponent(AutomacoesControlTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
