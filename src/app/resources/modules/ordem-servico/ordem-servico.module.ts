import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OrdemServicoComponent } from 'src/app/components/pages/ordem-servico/ordem-servico.component';
import { OrdemServicoDialogAddComponent } from 'src/app/components/pages/ordem-servico/ordem-servico-dialog-add/ordem-servico-dialog-add.component';
import { OrdemServicoDialogFinishComponent } from 'src/app/components/pages/ordem-servico/ordem-servico-dialog-finish/ordem-servico-dialog-finish.component';
import { OrdemServicoDialogRelatorioComponent } from 'src/app/components/pages/ordem-servico/ordem-servico-dialog-relatorio/ordem-servico-dialog-relatorio.component';
import { OrdemServicoDialogUpdateComponent } from 'src/app/components/pages/ordem-servico/ordem-servico-dialog-update/ordem-servico-dialog-update.component';
import { CartaoComponent } from 'src/app/components/add-on/cartao/cartao.component';

@NgModule({
  declarations: [
    CartaoComponent,
    OrdemServicoComponent,
    OrdemServicoDialogAddComponent,
    OrdemServicoDialogFinishComponent,
    OrdemServicoDialogRelatorioComponent,
    OrdemServicoDialogUpdateComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CartaoComponent,
    OrdemServicoComponent,
    OrdemServicoDialogAddComponent,
    OrdemServicoDialogFinishComponent,
    OrdemServicoDialogRelatorioComponent,
    OrdemServicoDialogUpdateComponent
  ]
})
export class OrdemServicoModule { }
