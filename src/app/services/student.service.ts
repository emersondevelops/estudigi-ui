import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Student} from '../models/student';
import {Observable} from 'rxjs';
import {PagedResponse} from '../models/pagedResponse';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    baseUrl = `${environment.api}/students`;

    constructor(private http: HttpClient) {
    }

    public create(student: Student): Observable<Student> {
        return this.http.post<Student>(this.baseUrl, student);
    }

    public read(
        size: number,
        page: number,
        sort: string,
        direction: string
    ): Observable<PagedResponse> {
        return this.http.get<PagedResponse>(
            `${this.baseUrl}?size=${size}&page=${page}&sort=${sort},${direction}`
        );
    }

    //
    // readByClient(
    //   size: number,
    //   page: number,
    //   sort: string,
    //   direction: string
    // ): Observable<Ticket[]> {
    //   // return this.http.get<Ticket[]>(this.baseUrl+"/client");
    //   return this.http.get<Ticket[]>(
    //     `${this.baseUrl}/client?size=${size}&page=${page}&sort=${sort},${direction}`
    //   );
    // }
    //

    //
    // readById(id: string): Observable<Ticket> {
    //   const url = `${this.baseUrl}/${id}`;
    //   return this.http.get<Ticket>(url);
    // }
    //
    // update(ticket: Ticket): Observable<Ticket> {
    //   const url = `${this.baseUrl}/${ticket.id}`;
    //   return this.http.put<Ticket>(url, ticket);
    // }
    //
    // delete(id: number): Observable<Ticket> {
    //   const url = `${this.baseUrl}/${id}`;
    //   return this.http.delete<Ticket>(url);
    // }
}
