import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { Escola } from "../model/escola";
import { EscolaService } from "../services/escola.service";

@Component({
    selector: 'app-novo',
    templateUrl: './novo.component.html'
})

export class NovoComponent implements OnInit{

    escolaForm!: FormGroup;
    escola: Escola = new Escola();
    formResult: string = '';

    constructor(private fb: FormBuilder,
                private escolaService: EscolaService,
                private router: Router,
                private toastr: ToastrService) {}

    ngOnInit() {
        this.escolaForm = this.fb.group({
            nome: [''],
            telefone: [''],
            email: ['']
        });
    }

    adicionarEscola() {
        if (this.escolaForm.dirty && this.escolaForm.valid) {

            this.escola = Object.assign({}, this.escola, this.escolaForm.value);
            this.formResult = JSON.stringify(this.escola);
      
            this.escolaService.cadastrarEscola(this.escola)
                .subscribe(
                    sucesso => this.processarSucesso(sucesso)
                )           
            
          }
    }

    processarSucesso(response: any) {
        this.escolaForm.reset();
    
        let toast = this.toastr.success('Escola cadastrado com sucesso!', 'Sucesso!');
        if (toast) {
          toast.onHidden.subscribe(() => {
            this.router.navigate(['/escola/listar-escolas']);  
          });
        }
      }
 }