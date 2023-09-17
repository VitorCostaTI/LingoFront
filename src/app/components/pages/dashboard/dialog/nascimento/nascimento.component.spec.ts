import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NascimentoComponent } from './nascimento.component';

describe('NascimentoComponent', () => {
  let component: NascimentoComponent;
  let fixture: ComponentFixture<NascimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NascimentoComponent]
    });
    fixture = TestBed.createComponent(NascimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
