import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Constant } from '../constant/Constant';
import { APIResponse, EmployeeModel, LoginModel, NewTicketObj } from '../models/API.Model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  login(obj: LoginModel): Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + Constant.API_END_Point.LOGIN, obj)
  }
  getEmployeeList(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(environment.API_URL + Constant.API_END_Point.GET_EMPLOYEE).pipe(map((res: any) => {
      return res.values;
    }))
  }
  getAllEmployee(): Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + Constant.API_END_Point.GET_EMPLOYEE)
  }
  createNewEmployee(obj: LoginModel): Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + Constant.API_END_Point.CREATE_EMPLOYEE, obj)
  }
  updateEmployee(obj: LoginModel): Observable<APIResponse> {
    return this.http.put<APIResponse>(environment.API_URL + Constant.API_END_Point.UPDATE_EMPLOYEE, obj)
  }
  deleteEmployee(id: number): Observable<APIResponse> {
    return this.http.delete<APIResponse>(environment.API_URL + Constant.API_END_Point.DELETE_EMPLOYEE + id)
  }
  createNewTicket(obj: NewTicketObj): Observable<APIResponse> {
    console.log('obj',obj)
    return this.http.post<APIResponse>(environment.API_URL + Constant.API_END_Point.NEW_TICKET, obj)
  }
  getTicketsCreatedByEmpId(id: number): Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + Constant.API_END_Point.GET_TICKETS_CREATED_BY_EMPLOYEE + id)
  }
  getNewTickets(id: number): Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + Constant.API_END_Point.GET_NEW_TICKETS + id)
  }
  GetEmpByDept(deptid: number): Observable<APIResponse> {
    console.log("heeeeeeeeeeee")
    return this.http.get<APIResponse>(environment.API_URL + Constant.API_END_Point.GET_EMP_BY_DEPT + deptid)
  }
  getAllTickets(): Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + Constant.API_END_Point.GET_ALL_TICKETS)
  }
  assignTicket(obj: any): Observable<APIResponse> {
    console.log('obj',obj)
    return this.http.post<APIResponse>(environment.API_URL + Constant.API_END_Point.ASSIGN_TICKET, obj)
  }
  getAssignedTickets(empid: number): Observable<APIResponse> {
    console.log("heeeeeeeeeeee")
    return this.http.get<APIResponse>(environment.API_URL + Constant.API_END_Point.GET_ASSIGNED_TICKETS_BY_EMPLOYEE + empid)
  }
  startTicket(ticketId: any): Observable<APIResponse> {
    console.log('ticketId',ticketId)
    return this.http.post<APIResponse>(environment.API_URL + Constant.API_END_Point.START_TICKET + ticketId, {})
  }
  closeTicket(ticketId: any): Observable<APIResponse> {
    console.log('ticketId',ticketId)
    return this.http.post<APIResponse>(environment.API_URL + Constant.API_END_Point.CLOSE_TICKET + ticketId, {})
  }

}
