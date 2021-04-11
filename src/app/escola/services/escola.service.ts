import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { BaseService } from "src/app/services/base.services";

import { Escola } from "../model/escola";

@Injectable()
export class EscolaService extends BaseService{

    escola: Escola = new Escola();

    constructor(private http: HttpClient){ super()}       
    
    obterEscolas(): Observable<Escola[]> {
        return this.http
            .get<Escola[]>(this.UrlServiceV1 + "Escola");
    }

    cadastrarEscola(escola: Escola): Observable<Escola> {
        return this.http.
                    post(this.UrlServiceV1 + "Escola", escola, this.ObterHeaderJson())
                    .pipe(map(super.extractData));

    }
}