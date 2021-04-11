import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Turma } from '../model/turma';
import { TurmaService } from '../services/turma.service';
import { Escola } from 'src/app/escola/model/escola';
import { EscolaService } from 'src/app/escola/services/escola.service';

@Component({
    selector: 'app-novo',
    templateUrl: './novo.component.html'
})

export class NovoComponent implements OnInit{

    turmaForm!: FormGroup;
    turma: Turma = new Turma();
    escolas: Escola[] = [];

    formResult: string = '';

    constructor(private fb: FormBuilder,
                private turmaService: TurmaService,
                private escolaService: EscolaService,
                private router: Router,
                private toastr: ToastrService) {}
    
    ngOnInit(): void {
      this.escolaService.obterEscolas()
          .subscribe(escolas => this.escolas = escolas);

      this.turmaForm = this.fb.group({
        nome:  [''],
        sala:  [''],
        dataInicio:  [''],
        dataFim:  [''],
        limiteTurma:  [''],
        escolaId:  [''],
        nomeEscola:  [''],
      })
    }


    adicionarTurma() {
        if (this.turmaForm.dirty && this.turmaForm.valid) {

            this.turma = Object.assign({}, this.turma, this.turmaForm.value);
            this.formResult = JSON.stringify(this.turma);

            this.turmaService.cadastrarTurma(this.turma)
                .subscribe(
                    sucesso => this.processarSucesso(sucesso)
                )           
            
          }
    }

    processarSucesso(response: any) {
        this.turmaForm.reset();
    
        let toast = this.toastr.success('Turma cadastrado com sucesso!', 'Sucesso!');
        if (toast) {
          toast.onHidden.subscribe(() => {
            this.router.navigate(['/turma/listar-turmas']);  
          });
        }
      }
 }