import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PagedResponseModel} from '../../models/pagedResponse.model';
import {QuestionModel} from './question.model';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    baseUrl = `${environment.api}/question`;

    constructor(private http: HttpClient) {
    }

    public create(question: QuestionModel): Observable<QuestionModel> {
        return this.http.post<QuestionModel>(this.baseUrl, question);
    }

    public read(
        size: number,
        page: number,
        sort: string,
        direction: string
    ): Observable<PagedResponseModel> {
        return this.http.get<PagedResponseModel>(
            `${this.baseUrl}?size=${size}&page=${page}&sort=${sort},${direction}`
        );
    }
}
