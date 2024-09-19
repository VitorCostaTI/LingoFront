import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-automacoes-control-time',
  templateUrl: './automacoes-control-time.component.html',
  styleUrls: ['./automacoes-control-time.component.scss']
})
export class AutomacoesControlTimeComponent {
  registerTime: FormGroup;
  isLoading: boolean = false;

  constructor(fb: FormBuilder) {
    this.registerTime = fb.group({
      controlTime: ['', [Validators.required]],
    })
  }

  salvarCadastro(): void {
    this.isLoading = true;
    setTimeout(() => {
      window.location.reload();
    }, 3500);
  }
}
