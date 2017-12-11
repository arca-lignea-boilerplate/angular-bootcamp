import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

@Injectable()
export class CompanyService {

  API_BASE = 'http://127.0.0.1:3000/companies';

  constructor(private httpClient: HttpClient) { }


  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}`)
      .pipe(catchError(this.errorHandler));
  }

  deleteCompany(companyId: number): Observable<Company> {
    return this.httpClient.delete<Company>(`${this.API_BASE}/${companyId}`);
  }

  private errorHandler(error: Error): Observable<Company[]> {
    console.error('implement custom error handler', error);
    return new EmptyObservable();
  }
}
