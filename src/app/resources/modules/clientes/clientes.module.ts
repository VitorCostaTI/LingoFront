import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ClientesComponent } from 'src/app/components/pages/clientes/clientes.component';
import { ClientesDialogComponent } from 'src/app/components/pages/clientes/clientes-dialog/clientes-dialog.component';



@NgModule({
  declarations: [
    ClientesComponent,
    ClientesDialogComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    ClientesComponent,
    ClientesDialogComponent,
  ]
})
export class ClientesModule { }
