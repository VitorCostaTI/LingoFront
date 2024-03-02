import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacaoComponent } from '../../dialogs/confirmacao/confirmacao.component';
import { ConfirmacaoService } from 'src/app/modules/services/Confirmacao/confirmacao.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

export interface MoradorElement {
  status: string;
  ip: string;
  firmware: string;
  modelo: string;
  fabricante: string;
  equipamento: string;
  local: string;
  porta: string;
  ultima_manutencao: string;
}

const ELEMENT_DATA: MoradorElement[] = [
  {
    status: "Conectado",
    ip: "192.168.0.192",
    firmware: "V6.14.10",
    modelo: "ControlID - IDFace",
    fabricante: "ControlID",
    equipamento: "Leitor Facial",
    local: "Acesso Estoque",
    porta: "4092",
    ultima_manutencao: "2024-02-23T14:21:42.000-03:00"
  },
  {
    status: "Conectado",
    ip: "192.168.0.130",
    firmware: "V6.14.10",
    modelo: "ControlID - IDFace",
    fabricante: "ControlID",
    equipamento: "Leitor Facial",
    local: "Acesso Canil",
    porta: "4093",
    ultima_manutencao: "2024-02-23T14:21:42.000-03:00"
  },
  {
    status: "Conectado",
    ip: "192.168.0.119",
    firmware: "V6.14",
    modelo: "ControlFood",
    fabricante: "Vitor Costa",
    equipamento: "Controlador Comedouro",
    local: "Quartos - PET",
    porta: "4094",
    ultima_manutencao: "2024-02-23T14:21:42.000-03:00"
  },
  {
    status: "Desconectado",
    ip: "192.168.0.219",
    firmware: "V1.14",
    modelo: "ControlLight",
    fabricante: "Vitor Costa",
    equipamento: "Controlador Luminária",
    local: "Corredor - PET",
    porta: "4095",
    ultima_manutencao: "2024-02-23T14:21:42.000-03:00"
  },
  {
    status: "Conectado",
    ip: "192.168.0.121",
    firmware: "V6.14",
    modelo: "ControlFood",
    fabricante: "Vitor Costa",
    equipamento: "Controlador Bebedouro",
    local: "Quartos - PET",
    porta: "4096",
    ultima_manutencao: "2024-02-23T14:21:42.000-03:00"
  },
  {
    status: "Conectado",
    ip: "192.168.0.152",
    firmware: "V6.14.10",
    modelo: "ControlID - IDFace",
    fabricante: "ControlID",
    equipamento: "Leitor Facial",
    local: "Casa 3",
    porta: "4097",
    ultima_manutencao: "2024-02-23T14:21:42.000-03:00"
  },
  {
    status: "Conectado",
    ip: "192.168.0.129",
    firmware: "V6.14.10",
    modelo: "ControlID - IDFace",
    fabricante: "ControlID",
    equipamento: "Leitor Facial",
    local: "Casa 2",
    porta: "4098",
    ultima_manutencao: "2024-02-23T14:21:42.000-03:00"
  },
  {
    status: "Desconectado",
    ip: "192.168.0.132",
    firmware: "V6.14.10",
    modelo: "ControlID - IDFace",
    fabricante: "ControlID",
    equipamento: "Leitor Facial",
    local: "Casa 1",
    porta: "4090",
    ultima_manutencao: "2024-02-23T14:21:42.000-03:00"
  },
  {
    status: "Conectado",
    ip: "192.168.0.189",
    firmware: "V6.14.10",
    modelo: "ControlID - IDFace",
    fabricante: "ControlID",
    equipamento: "Leitor Facial",
    local: "Portão Clausura Canil",
    porta: "4091",
    ultima_manutencao: "2024-02-23T14:21:42.000-03:00"
  },
  {
    status: "Conectado",
    ip: "192.168.0.109",
    firmware: "V5.18.10",
    modelo: "BioProx",
    fabricante: "ControlID",
    equipamento: "Leitor Biometrico",
    local: "Portão Clausura",
    porta: "4099",
    ultima_manutencao: "2024-02-23T14:21:42.000-03:00"
  }
];

@Component({
  selector: 'app-automacao',
  templateUrl: './automacao.component.html',
  styleUrls: ['./automacao.component.scss']
})
export class AutomacaoComponent {

  quantidade = 25;
  isLoading: boolean = false;
  isTemperatura: boolean = false;

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private dialog: MatDialog,
    private confirmacaoService: ConfirmacaoService,
    private _snackBar: MatSnackBar
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
      this._snackBar.open('Temperatura máxima atingida!!', '', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
  }

  decrementar(): void {
    if (this.quantidade > 10) {
      this.quantidade--;
    } else {
      this._snackBar.open('Temperatura mínima atingida!!', '', {
        duration: 2000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
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

  dataSource = ELEMENT_DATA;
}
