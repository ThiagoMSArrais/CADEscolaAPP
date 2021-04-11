import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { TurmaAppComponent } from './turma.app.component';
import { ListarComponent } from './lista/lista.component';
import { NovoComponent } from './novo/novo.component';

const turmaRouterModule: Routes = [
    { 
        path: '', component: TurmaAppComponent,
        children: [
            { path: 'listar-turmas', component: ListarComponent },
            { path: 'cadastrar-turma', component: NovoComponent }
        ]
    
    }
]

@NgModule({
    imports: [RouterModule.forChild(turmaRouterModule)],
    exports: [RouterModule]
})

export class TurmaRountingModule { }