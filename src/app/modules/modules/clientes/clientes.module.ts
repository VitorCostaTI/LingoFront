import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ClientesComponent } from 'src/app/components/pages/clientes/clientes.component';
import { ClientesDialogComponent } from 'src/app/components/pages/clientes/clientes-dialog/clientes-dialog.component';
import { ClientesUpdateDialogComponent } from 'src/app/components/pages/clientes/clientes-update-dialog/clientes-update-dialog.component';



@NgModule({
  declarations: [
    ClientesComponent,
    ClientesDialogComponent,
    ClientesUpdateDialogComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    ClientesComponent,
    ClientesDialogComponent,
    ClientesUpdateDialogComponent,
  ]
})
export class ClientesModule { }
