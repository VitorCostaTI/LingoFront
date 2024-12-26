import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesUpdateDialogComponent } from './clientes-dialog.component';

describe('ClientesUpdateDialogComponent', () => {
  let component: ClientesUpdateDialogComponent;
  let fixture: ComponentFixture<ClientesUpdateDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesUpdateDialogComponent]
    });
    fixture = TestBed.createComponent(ClientesUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
