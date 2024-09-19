import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomacoesDialogComponent } from './automacoes-dialog.component';

describe('AutomacoesDialogComponent', () => {
  let component: AutomacoesDialogComponent;
  let fixture: ComponentFixture<AutomacoesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomacoesDialogComponent]
    });
    fixture = TestBed.createComponent(AutomacoesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
