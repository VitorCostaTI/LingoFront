import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TemplateCrudService } from 'src/app/resources/services/Template/template-crud.service';
import { AutomacoesDialogComponent } from './automacoes-dialog/automacoes-dialog.component';
import { AutomacoesControlTimeComponent } from './automacoes-control-time/automacoes-control-time.component';
import { AutomacoesMonitoramentoComponent } from './automacoes-monitoramento/automacoes-monitoramento.component';

@Component({
  selector: 'app-automacao',
  templateUrl: './automacao.component.html',
  styleUrls: ['./automacao.component.scss']
})
export class AutomacaoComponent {

  quantidade = 25;
  isTemperatura: boolean = false;
  isLoading: boolean = false;

  power: boolean = true;
  power1: boolean = true;
  power2: boolean = true;
  power3: boolean = true;

  constructor(
    private dialog: MatDialog,
    private templateService: TemplateCrudService
  ) { }

  @HostListener('window:keydown.control.m', ['$event'])
  handlePlus(event: KeyboardEvent) {
    event.preventDefault();
    this.incrementar()
  }

  @HostListener('window:keydown.control.b', ['$event'])
  handleDecrement(event: KeyboardEvent) {
    event.preventDefault();
    this.decrementar()
  }

  powerFunction(): void {
    if (this.power === true) {
      this.power = false;
    } else {
      this.power = true;
    }
  }

  powerFunction1(): void {
    if (this.power1 === true) {
      this.power1 = false;
    } else {
      this.power1 = true;
    }
  }

  powerFunction2(): void {
    if (this.power2 === true) {
      this.power2 = false;
    } else {
      this.power2 = true;
    }
  }

  powerFunction3(): void {
    if (this.power3 === true) {
      this.power3 = false;
    } else {
      this.power3 = true;
    }
  }

  openDialogAutomacao(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AutomacoesDialogComponent, {
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

  openDialogMonitoramento(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AutomacoesMonitoramentoComponent, {
      width: '80%',
      enterAnimationDuration,
      exitAnimationDuration,
    });
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
}