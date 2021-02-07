import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PagedResponseModel} from '../../models/pagedResponse.model';
import {TestResultModel} from './test-result.model';

@Injectable({
    providedIn: 'root'
})
export class TestResultService {

    baseUrl = `${environment.api}/test-result`;

    constructor(private http: HttpClient) {
    }

    public create(testResult: TestResultModel): Observable<TestResultModel> {
        return this.http.post<TestResultModel>(this.baseUrl, testResult);
    }

    public readByTestId(
        size: number,
        page: number,
        sort: string,
        direction: string,
        testId: string,
    ): Observable<PagedResponseModel> {
        return this.http.get<PagedResponseModel>(
            `${this.baseUrl}/by-test-id/${testId}?size=${size}&page=${page}&sort=${sort},${direction}`
        );
    }
}
