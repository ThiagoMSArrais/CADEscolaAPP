import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from 'src/app/services/base.services';
import { Turma } from '../model/turma';

@Injectable()
export class TurmaService extends BaseService {

    turma: Turma = new Turma();

    constructor(private http: HttpClient) { super() }

    obterTurmas(): Observable<Turma[]> {
        return this.http
            .get<Turma[]>(this.UrlServiceV1 + "Turmas");
    }

    cadastrarTurma(turma: Turma): Observable<Turma> {
        return this.http
            .post(this.UrlServiceV1 + "Turmas", turma, this.ObterHeaderJson())
            .pipe(map(super.extractData));
    }
}