import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AutomacoesControlTimeComponent } from '../automacoes-control-time/automacoes-control-time.component';
import { AutomacoesMonitoramentoComponent } from '../automacoes-monitoramento/automacoes-monitoramento.component';

@Component({
  selector: 'app-automacao-comandos',
  templateUrl: './automacao-comandos.component.html',
  styleUrls: ['./automacao-comandos.component.scss']
})

export class AutomacaoComandosComponent {

  power1: boolean = true;
  power2: boolean = true;
  power3: boolean = true;

  constructor(
    private dialog: MatDialog,
  ) { }

  powerFunction1(): void {
    this.power1 = !this.power1;
  }

  powerFunction2(): void {
    this.power2 = !this.power2;
  }

  powerFunction3(): void {
    this.power3 = !this.power3;
  }

  openDialogMonitoramento(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AutomacoesMonitoramentoComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogTemporizador(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AutomacoesControlTimeComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}