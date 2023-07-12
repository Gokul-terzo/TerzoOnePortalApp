import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { EmployeeDetails } from './EmployeeDetails';
import { LoginObject } from './LoginObject';
@Injectable({
  providedIn: 'root'
})
export class AppService {
    constructor(private http: HttpClient) { }

    private url = "http://localhost:8080/";

    login(loginCredentials:LoginObject):Observable<any>{
      return this.http.post(`${this.url}auth/login`,loginCredentials)
    }

    deleteEmployee(id: number): Observable<any>{
        console.log(id);
        const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
        return this.http.delete<any>(`${this.url}api/employee/${id}/delete`,{headers});
      }

      addEmployee(user: EmployeeDetails){
        const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
        return this.http.post<EmployeeDetails>(`${this.url}api/employee/new`,user,{headers})
      }

    getEmployees(): Observable<any[]>{
    console.log("In get employee service");
    const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
    return this.http.get<any[]>(this.url+'api/employees',{headers});
  }

    getEmployeeById(id: number): Observable<EmployeeDetails>{
      const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
    return this.http.get<EmployeeDetails>(`${this.url}api/employee/${id}/view`,{headers})
    }

    updateEmployee(id?: number ,employee?: EmployeeDetails): Observable<any>{
      const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`);
      return this.http.put<any>(`${this.url}api/employee/${id}/edit`, employee,{headers});
    }

    searchUsers(query:string):Observable<any[]>{
      const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
      console.log("In get employee service");
      return this.http.get<any[]>(this.url+`api/employees/search/${query}`,{headers})
    }
}