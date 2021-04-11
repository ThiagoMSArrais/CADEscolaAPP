import { Component, OnInit } from "@angular/core";

import { Turma } from '../model/turma';
import { TurmaService } from '../services/turma.service';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html'
})

export class ListarComponent implements OnInit{
    
    turmas: Turma[] = []
    
    constructor(private turmaService: TurmaService) { }
    
    ngOnInit(): void {
        this.turmaService.obterTurmas()
            .subscribe(turmas => this.turmas = turmas);
    }
}