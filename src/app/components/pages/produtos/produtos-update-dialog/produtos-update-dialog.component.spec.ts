import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosUpdateDialogComponent } from './produtos-update-dialog.component';

describe('ProdutosUpdateDialogComponent', () => {
  let component: ProdutosUpdateDialogComponent;
  let fixture: ComponentFixture<ProdutosUpdateDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosUpdateDialogComponent]
    });
    fixture = TestBed.createComponent(ProdutosUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
