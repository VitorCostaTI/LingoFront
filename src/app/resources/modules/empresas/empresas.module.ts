import { NgModule } from '@angular/core';
import { EmpresasComponent } from 'src/app/components/pages/empresas/empresas.component';
import { SharedModule } from '../shared/shared.module';
import { EmpresasDialogComponent } from 'src/app/components/pages/empresas/empresas-dialog/empresas-dialog.component';

@NgModule({
  declarations: [
    EmpresasComponent,
    EmpresasDialogComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    EmpresasComponent,
    EmpresasDialogComponent,
  ]
})
export class EmpresasModule { }
