import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacaoComponent } from '../../dialogs/confirmacao/confirmacao.component';
import { ConfirmacaoService } from 'src/app/modules/services/Confirmacao/confirmacao.service';
import { TemplateCrudService } from 'src/app/modules/services/Template/template-crud.service';
import { Automacao_DATA } from 'src/Database/Automacao';

@Component({
  selector: 'app-automacao',
  templateUrl: './automacao.component.html',
  styleUrls: ['./automacao.component.scss']
})
export class AutomacaoComponent {

  quantidade = 25;
  isLoading: boolean = false;
  isTemperatura: boolean = false;

  constructor(private dialog: MatDialog,
    private confirmacaoService: ConfirmacaoService,
    private templateService: TemplateCrudService
  ) { }

  ngOnInit(): void {
    this.reload();
  }

  reload(): void {
    setTimeout(() => {
      window.location.reload();
    }, 120000);  // Recarrega a pagina a cada 2 minutos
  }

  openDialogDelete(enterAnimationDuration: string, exitAnimationDuration: string, nome: string): void {
    this.confirmacaoService.acao = "desconectar";
    this.confirmacaoService.nome = nome;
    this.dialog.open(ConfirmacaoComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  reconect() {
    this.isLoading = true;
    setTimeout(() => {
      window.location.reload()
    }, 3000);  // Contador 3 segundos
  }

  incrementar(): void {
    if (this.quantidade < 35) {
      this.quantidade++;
    } else {
      this.templateService.snackBarFailed("Temperatura maxima atingida!!", "")
    }
  }

  decrementar(): void {
    if (this.quantidade > 10) {
      this.quantidade--;
    } else {
      this.templateService.snackBarFailed("Temperatura minima atingida!!", "")
    }
  }

  displayedColumns: string[] = [
    'status',
    'ip',
    'dispositivo',
    'firmware',
    'porta',
    'manutencao',
    'acoes'
  ];

  dataSource = Automacao_DATA;
}
