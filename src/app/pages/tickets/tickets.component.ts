import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../core/services/department.service';
import { Observable } from 'rxjs';
import { APIResponse, Department, EmployeeModel, NewTicketObj, TicketList } from '../../core/models/API.Model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../core/services/employee.service';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent implements OnInit {
  deptList$: Observable<Department[]> | undefined;
  ticketObj: NewTicketObj = new NewTicketObj();
  ticketList: TicketList[] = [];
  deptEmployeeList: EmployeeModel[] = [];
  loggedData: any;
  currentPage: any;
  totalPages: any;
  constructor(private deptSrv: DepartmentService, private empSrv: EmployeeService) {
    this.deptList$ = deptSrv.getDeptList();
    const localData = localStorage.getItem('ticketData');
    if (localData != null) {
      this.loggedData = JSON.parse(localData);
      this.ticketObj.employeeId = this.loggedData.emp_id;
    }
  }

  ngOnInit(): void {
    this.changePage(1);
    this.loadTicketData();
  }

  loadTicketData() {
    if (this.loggedData.role == 'Employee') {
      this.getTicketsCreatedByEmpId();
    }
    else if (this.loggedData.role == 'Department Head') {
      this.GetEmpByDept();
      this.getNewUnAssignedTickets();
    }
    else if (this.loggedData.role == 'Admin Department Employee') {
      this.getAssignedTickets();
    } 
    else{
      this.getAllTickets();
    }
    this.ticketObj.deptId =  0;
    this.ticketObj.severity =  '';
    this.ticketObj.requestDetails =  '';
  }

  getTicketsCreatedByEmpId() {
    this.empSrv.getTicketsCreatedByEmpId(this.ticketObj.employeeId).subscribe((res: APIResponse) => {
      if (res.status) {
        this.ticketList = res.values;
      }
    })
  }

  getAssignedTickets() {
    this.empSrv.getAssignedTickets(this.ticketObj.employeeId).subscribe((res: APIResponse) => {
      if (res.status) {
        this.ticketList = res.values;
      }
    })
  }

  getNewUnAssignedTickets() {
    this.empSrv.getNewTickets(this.loggedData.emp_id).subscribe((res: APIResponse) => {
      if (res.status) {
        this.ticketList = res.values;
      }
    })
  }

  GetEmpByDept() {
    this.empSrv.GetEmpByDept(this.loggedData.deptId).subscribe((res: APIResponse) => {
      if (res.status) {
        this.deptEmployeeList = res.values;
      }
    })
  }

  getAllTickets() {
    this.empSrv.getAllTickets().subscribe((res: APIResponse) => {
      if (res.status) {
        this.ticketList = res.values;
      }
    })
  }

  onCreateTicket() {
    this.empSrv.createNewTicket(this.ticketObj).subscribe((res: APIResponse) => {
      if (res.status) {
        alert("Ticket Created");
        this.loadTicketData();
      } else {
        alert(res.message);
      }
    })
  }

  assignEmp(empId: any, ticketId: number) {
    debugger;
    const obj = {
      "ticketId": ticketId,
      "assignedTo": empId.target.value
    };
    this.empSrv.assignTicket(obj).subscribe((res: APIResponse) => {
      if (res.status) {
        alert("Ticket Assigned Successfully");
        this.loadTicketData();
      } else {
        alert(res.message);
      }
    })
  }

  startTicket(ticketId: number) {
    this.empSrv.startTicket(ticketId).subscribe((res: APIResponse) => {
      if (res.status) {
        alert("Ticket Status Changed");
        this.loadTicketData();
      } else {
        alert(res.message);
      }
    })
  }

  closeTicket(ticketId: number) {
    this.empSrv.closeTicket(ticketId).subscribe((res: APIResponse) => {
      if (res.status) {
        alert("Ticket Status Changed");
        this.loadTicketData();
      } else {
        alert(res.message);
      }
    })
  }

  changePage(pg_nos: number) {

  }
}
