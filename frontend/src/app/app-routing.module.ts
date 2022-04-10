import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './views/cadastro/cadastro.component';
import { InfoComponent } from './views/info/info.component';

const routes: Routes = [
  {
    path: "",
    component: CadastroComponent
  },
  {
    path: "info",
    component: InfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
