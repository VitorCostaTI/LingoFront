import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuditoriaComponent } from './components/pages/auditoria/auditoria.component';
import { AutomacaoComponent } from './components/pages/automacao/automacao.component';
import { ClientesComponent } from './components/pages/clientes/clientes.component';
import { ComunidadeComponent } from './components/pages/comunidade/comunidade.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { EmpresasComponent } from './components/pages/empresas/empresas.component';
import { EstoqueComponent } from './components/pages/estoque/estoque.component';
import { Error404Component } from './components/add-on/error404/error404.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { OrdemServicoComponent } from './components/pages/ordem-servico/ordem-servico.component';
import { PermissaoAcessoComponent } from './components/pages/permissao-acesso/permissao-acesso.component';
import { ProdutosComponent } from './components/pages/produtos/produtos.component';
import { UsuarioComponent } from './components/pages/usuario/usuario.component';
import { ProfileUserComponent } from './components/pages/usuario/profile-user/profile-user.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'auditorias', component: AuditoriaComponent },
      { path: 'automacao', component: AutomacaoComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'comunidade', component: ComunidadeComponent },
      { path: 'empresas', component: EmpresasComponent },
      { path: 'estoque', component: EstoqueComponent },
      { path: 'ordemServico', component: OrdemServicoComponent },
      { path: 'permissoes', component: PermissaoAcessoComponent },
      { path: 'produtos', component: ProdutosComponent },
      { path: 'usuarios', component: UsuarioComponent },
      { path: 'perfil', component: ProfileUserComponent },
    ]
  },
  { path: 'login', component: LoginComponent },

  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }