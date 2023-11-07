import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueDialogComponent } from './estoque-dialog.component';

describe('EstoqueDialogComponent', () => {
  let component: EstoqueDialogComponent;
  let fixture: ComponentFixture<EstoqueDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstoqueDialogComponent]
    });
    fixture = TestBed.createComponent(EstoqueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
