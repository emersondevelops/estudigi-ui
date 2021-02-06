import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PagedResponseModel} from '../../models/pagedResponse.model';
import {TestModel} from './test.model';

@Injectable({
    providedIn: 'root'
})
export class TestService {

    baseUrl = `${environment.api}/test`;

    constructor(private http: HttpClient) {
    }

    public create(test: TestModel): Observable<TestModel> {
        return this.http.post<TestModel>(this.baseUrl, test);
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
