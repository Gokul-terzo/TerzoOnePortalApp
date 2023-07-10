import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) { }

    private url = "http://localhost:8080/";

    deleteUser(id: number): Observable<any>{
        console.log(id);
        return this.http.delete<any>(`${this.url}${id}/delete`)
      }

    getUsers(): Observable<any[]>{
    console.log("In get employee service");
    return this.http.get<any[]>(this.url+'api/employees')
  }
}