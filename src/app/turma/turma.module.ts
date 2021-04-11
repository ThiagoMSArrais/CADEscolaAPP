import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TurmaService } from './services/turma.service';

import { ListarComponent } from './lista/lista.component';
import { NovoComponent } from './novo/novo.component';
import { TurmaAppComponent } from './turma.app.component';
import { TurmaRountingModule } from './turma.route';
import { EscolaService } from '../escola/services/escola.service';

@NgModule({
    declarations: [
        TurmaAppComponent,
        NovoComponent,
        ListarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TurmaRountingModule
    ],
    providers: [
        TurmaService,
        EscolaService
    ]
})

export class TurmaModule { }