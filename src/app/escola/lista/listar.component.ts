import { Component, OnInit } from "@angular/core";

import { Escola } from "../model/escola";
import { EscolaService } from "../services/escola.service";

@Component({
    selector: 'app-listar',
    templateUrl: './listar.component.html'
})

export class ListarComponent implements OnInit{ 

    escolas: Escola[] = [];

    constructor(private escolaService: EscolaService) { }

    ngOnInit(): void {
        this.escolaService.obterEscolas()
            .subscribe(
                escolas => this.escolas = escolas
            );
    }


}