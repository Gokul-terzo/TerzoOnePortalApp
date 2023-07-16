import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { EmployeeDetails } from './EmployeeDetails';
import { LoginObject } from './LoginObject';
import { TimeOff } from './TimeOff';
@Injectable({
  providedIn: 'root'
})
export class AppService {
 
    constructor(private http: HttpClient) { }

    private url = "http://localhost:8080/";

    getRole(email: string) :Observable<any>{
      return this.http.get(`${this.url}auth/role/${email}`)
    }

    login(loginCredentials:LoginObject):Observable<any>{
      return this.http.post(`${this.url}auth/login`,loginCredentials)
    }

    register(registrationCredentials:LoginObject):Observable<any>{
      return this.http.post(`${this.url}auth/register`,registrationCredentials)
    }

    deleteUser(email:string):Observable<any>{
      return this.http.get(`${this.url}auth/delete/${email}`);
    }

    deleteEmployee(id: number): Observable<any>{
        console.log(id);
        const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
        return this.http.delete<any>(`${this.url}api/admin/employee/${id}/delete`,{headers});
      }

      addEmployee(user: EmployeeDetails){
        const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
        return this.http.post<EmployeeDetails>(`${this.url}api/admin/employee/new`,user,{headers})
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
      return this.http.put<any>(`${this.url}api/admin/employee/${id}/edit`, employee,{headers});
    }

    getEmployeeByEmail(email: string): Observable<EmployeeDetails>{
      const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
    return this.http.get<EmployeeDetails>(`${this.url}api/dashboard/employee/${email}/get`,{headers})
    }
    
    getHolidays():Observable<any[]>{
      const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
    return this.http.get<any[]>(this.url+'api/dashboard/holidays',{headers});
    }

    searchUsers(query:string):Observable<any[]>{
      const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
      console.log("In get employee service");
      return this.http.get<any[]>(this.url+`api/employees/search/${query}`,{headers})
    }

    getBirthday():Observable<any[]>{
      const jwt=localStorage.getItem('jwtToken');
      const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
        console.log("In get birthday service");
        return this.http.get<any[]>(this.url+`api/dashboard/birthday-buddies`,{headers})
    }

    getWorkAnniversary():Observable<any[]>{
      const jwt=localStorage.getItem('jwtToken');
      const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
        console.log("In get work anniversary service");
        return this.http.get<any[]>(this.url+`api/dashboard/work-anniversary`,{headers})
    }

    getNewHires():Observable<any[]>{
      const jwt=localStorage.getItem('jwtToken');
      const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
        console.log("In get work anniversary service");
        return this.http.get<any[]>(this.url+`api/dashboard/new-hires`,{headers})
    }

    sortDept(query:string):Observable<any[]>{
      const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
      return this.http.get<any[]>(this.url+`api/employees/sort-by-department/${query}`,{headers})
    }

    sortName(query:string):Observable<any[]>{
      const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
      return this.http.get<any[]>(this.url+`api/employees/sort-by-name/${query}`,{headers})
    }

    applyLeave(leaveDetails:TimeOff):Observable<any>{
      const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
      return this.http.post<any>(this.url+`api/time-off/apply-leave`,leaveDetails,{headers})
    }
    
}