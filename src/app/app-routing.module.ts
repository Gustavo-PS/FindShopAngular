import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro/cadastro.component';
import { DashboardsComponent } from './dashboards/dashboards/dashboards.component';
import { GerenciamentoComponent } from './gerenciamento/gerenciamento/gerenciamento.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  },
  {
    path:"cadastro",
    component: CadastroComponent
  },
  {
    path:"dashboard",
    component: DashboardsComponent
  },
  {
    path:"gerenciamento",
    component: GerenciamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
