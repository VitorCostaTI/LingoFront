import { NgModule } from '@angular/core';
import { AuditoriaComponent } from 'src/app/components/pages/auditoria/auditoria.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AuditoriaComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AuditoriaComponent,
  ]
})
export class AuditoriaModule { }
