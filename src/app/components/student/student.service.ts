import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Student} from '../../models/student';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = `${environment.api}/students`;

  constructor(private http: HttpClient) {
  }

  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, student);
  }

  read(
    size: number,
    page: number,
    sort: string,
    direction: string
  ): Observable<Student[]> {
    return this.http.get<Student[]>(
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
