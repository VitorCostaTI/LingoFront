import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomacoesUpdateDialogComponent } from './automacoes-update-dialog.component';

describe('AutomacoesUpdateDialogComponent', () => {
  let component: AutomacoesUpdateDialogComponent;
  let fixture: ComponentFixture<AutomacoesUpdateDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomacoesUpdateDialogComponent]
    });
    fixture = TestBed.createComponent(AutomacoesUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
