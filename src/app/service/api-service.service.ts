import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    const url = environment.GET_API_LINK;
    return this.http.get<any>(url);
  }
}
