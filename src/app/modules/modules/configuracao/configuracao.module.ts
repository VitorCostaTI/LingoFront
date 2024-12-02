import { NgModule } from '@angular/core';
import { ConfiguracoesComponent } from 'src/app/components/dialogs/configuracoes/configuracoes.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ConfiguracoesComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ConfiguracoesComponent
  ]
})
export class ConfiguracaoModule { }
