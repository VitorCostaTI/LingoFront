import { NgModule } from '@angular/core';
import { AutomacoesDialogComponent } from 'src/app/components/pages/automacao/automacoes-dialog/automacoes-dialog.component';
import { AutomacoesUpdateDialogComponent } from 'src/app/components/pages/automacao/automacoes-update-dialog/automacoes-update-dialog.component';
import { AutomacoesControlTimeComponent } from 'src/app/components/pages/automacao/automacoes-control-time/automacoes-control-time.component';
import { AutomacoesMonitoramentoComponent } from 'src/app/components/pages/automacao/automacoes-monitoramento/automacoes-monitoramento.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AutomacoesDialogComponent,
    AutomacoesUpdateDialogComponent,
    AutomacoesControlTimeComponent,
    AutomacoesMonitoramentoComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AutomacoesDialogComponent,
    AutomacoesUpdateDialogComponent,
    AutomacoesControlTimeComponent,
    AutomacoesMonitoramentoComponent
  ],
})
export class AutomacoesModule { }
