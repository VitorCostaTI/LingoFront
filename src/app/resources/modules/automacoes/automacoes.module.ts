import { NgModule } from '@angular/core';
import { AutomacoesDialogComponent } from 'src/app/components/pages/automacao/automacoes-dialog/automacoes-dialog.component';
import { AutomacoesUpdateDialogComponent } from 'src/app/components/pages/automacao/automacoes-update-dialog/automacoes-update-dialog.component';
import { AutomacoesControlTimeComponent } from 'src/app/components/pages/automacao/automacoes-control-time/automacoes-control-time.component';
import { AutomacoesMonitoramentoComponent } from 'src/app/components/pages/automacao/automacoes-monitoramento/automacoes-monitoramento.component';
import { SharedModule } from '../../shared/shared.module';
import { AutomacaoComponent } from 'src/app/components/pages/automacao/automacao.component';
import { AutomacaoDispositivosComponent } from 'src/app/components/pages/automacao/automacao-dispositivos/automacao-dispositivos.component';
import { AutomacaoComandosComponent } from 'src/app/components/pages/automacao/automacao-comandos/automacao-comandos.component';

@NgModule({
  declarations: [
    AutomacaoComponent,
    AutomacoesDialogComponent,
    AutomacoesUpdateDialogComponent,
    AutomacaoDispositivosComponent,
    AutomacaoComandosComponent,
    AutomacoesControlTimeComponent,
    AutomacoesMonitoramentoComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AutomacaoComponent,
    AutomacoesDialogComponent,
    AutomacoesUpdateDialogComponent,
    AutomacaoDispositivosComponent,
    AutomacaoComandosComponent,
    AutomacoesControlTimeComponent,
    AutomacoesMonitoramentoComponent
  ],
})
export class AutomacoesModule { }
