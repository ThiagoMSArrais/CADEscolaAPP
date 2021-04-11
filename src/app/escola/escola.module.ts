import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { EscolaService } from "./services/escola.service";
import { EscolaRoutingModule } from "./escola.route";

import { NovoComponent } from "./novo/novo.component";
import { EscolaAppComponent } from "./escola.app.component";
import { ListarComponent } from "./lista/listar.component";

@NgModule({
    declarations:[
        NovoComponent,
        ListarComponent,
        EscolaAppComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EscolaRoutingModule
    ],
    providers: [
        EscolaService
    ]
})

export class EscolaModule {}