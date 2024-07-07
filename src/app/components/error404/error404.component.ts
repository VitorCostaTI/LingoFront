import { Component } from '@angular/core';
import { TemplateCrudService } from 'src/app/modules/services/Template/template-crud.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component {

  constructor(private templateService: TemplateCrudService) { }

  ngOnInit() {
    this.templateService.snackBarFailed("Sucesso ao executar requisição", "")
  }
}