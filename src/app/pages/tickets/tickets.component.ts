import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../core/services/department.service';
import { Observable } from 'rxjs';
import { APIResponse, Department, NewTicketObj, TicketList } from '../../core/models/API.Model';
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
  constructor(private deptSrv: DepartmentService, private empSrv: EmployeeService) {
    this.deptList$ = deptSrv.getDeptList();
    const localData = localStorage.getItem('ticketData');
    if (localData != null) {
      let employeeId = JSON.parse(localData);
      this.ticketObj.employeeId = employeeId.emp_id;
    }
  }

  ngOnInit(): void {
    this.getTicketsCreatedByEmpId();
  }

  getTicketsCreatedByEmpId() {
    this.empSrv.getTicketsCreatedByEmpId(this.ticketObj.employeeId).subscribe((res: APIResponse) => {
      if (res.status) {
        this.ticketList = res.values;
      }
    })
  }

  onDelete() {

  }

  onCreateTicket() {
    this.empSrv.createNewTicket(this.ticketObj).subscribe((res: APIResponse) => {
      if (res.status) {
        alert("Ticket Created")
      } else {
        alert(res.message);
      }
    })
  }

}
