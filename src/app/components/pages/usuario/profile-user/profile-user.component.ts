import { Component } from '@angular/core';
import { Colaborador } from 'src/app/resources/model/Colaborador';
import { TemplateCrudService } from 'src/app/resources/services/Template/template-crud.service';
import { Colaborador_DATA } from 'src/database/Colaborador';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent {
  hide = true;

  perfilUsuario: Colaborador | undefined;

  ngOnInit(): void {
    this.buscarColaborador();
  }

  constructor(private templateService: TemplateCrudService) { }

  buscarColaborador(): void {
    this.perfilUsuario = Colaborador_DATA.find(
      colaborador => colaborador.colaborador === 'Vitor Henrique Mariano da Costa'
    );

    if (!this.perfilUsuario) {
      this.templateService.snackBarFailed("Perfil não encontrado", "")
    }
  }
}
