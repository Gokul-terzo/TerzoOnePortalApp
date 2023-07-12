import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { EmployeeDetails } from './EmployeeDetails';

@Injectable({
  providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) { }

    private url = "http://localhost:8080/";

    deleteEmployee(id: number): Observable<any>{
        console.log(id);
        return this.http.delete<any>(`${this.url}api/employee/${id}/delete`)
      }
      addEmployee(user: EmployeeDetails){
        return this.http.post<EmployeeDetails>(`${this.url}api/employee/new`, user)
      }

    getEmployees(): Observable<any[]>{
    console.log("In get employee service");
    return this.http.get<any[]>(this.url+'api/employees')
  }

    getEmployeeById(id: number): Observable<EmployeeDetails>{
    return this.http.get<EmployeeDetails>(`${this.url}api/employee/${id}/view`)
    }

    updateEmployee(id?: number ,employee?: EmployeeDetails): Observable<any>{
      return this.http.put<any>(`${this.url}api/employee/${id}/edit`, employee)
    }

    searchUsers(query:string):Observable<any[]>{
      console.log("In get employee service");
      return this.http.get<any[]>(this.url+`api/employees/search/${query}`)
    }
}