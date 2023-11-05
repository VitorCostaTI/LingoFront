import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradoresDialogComponent } from './colaboradores-dialog.component';

describe('ColaboradoresDialogComponent', () => {
  let component: ColaboradoresDialogComponent;
  let fixture: ComponentFixture<ColaboradoresDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColaboradoresDialogComponent]
    });
    fixture = TestBed.createComponent(ColaboradoresDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
