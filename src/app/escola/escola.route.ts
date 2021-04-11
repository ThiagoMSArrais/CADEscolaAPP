import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EscolaAppComponent } from "./escola.app.component";
import { ListarComponent } from "./lista/listar.component";
import { NovoComponent } from "./novo/novo.component";


const escolaRouterConfig: Routes = [
    { path: '', component: EscolaAppComponent,
      children: [
          { path: 'listar-escolas', component: ListarComponent },
          { path: 'adicionar-nova-escola', component: NovoComponent}
      ] }
]

@NgModule({
    imports: [RouterModule.forChild(escolaRouterConfig)],
    exports: [RouterModule]
})

export class EscolaRoutingModule { }