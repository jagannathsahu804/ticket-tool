import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../core/services/department.service';
import { APIResponse} from '../../core/models/API.Model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalEmployees = 0;
  totalDepartmentHeads = 0;
  totalAdminDepartmentEmployees = 0;
  totalOpenTickets = 0;
  totalAssignedTickets = 0;
  totalClosedTickets = 0;
  totalTicketsInProgress = 0;
  totalDepartments = 0;

  constructor(private deptService: DepartmentService) { }
  // Mock data for demonstration
  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData() {
    // Replace with actual service call to fetch data
      this.deptService.getDashboardDetails().subscribe((res: APIResponse) => {
        this.totalEmployees = res.values[0].totalEmployees;
        this.totalDepartmentHeads = res.values[0].totalDepartmentHeads;
        this.totalAdminDepartmentEmployees = res.values[0].totalAdminDepartmentEmployees;
        this.totalOpenTickets = res.values[0].totalOpenTickets;
        this.totalAssignedTickets = res.values[0].totalAssignedTickets;
        this.totalClosedTickets = res.values[0].totalClosedTickets;
        this.totalTicketsInProgress = res.values[0].totalTicketsInProgress;
        this.totalDepartments = res.values[0].totalDepartments;
      })
    // this.totalEmployees = 100;
    // this.totalDepartmentHeads = 10;
    // this.totalAdminDepartmentEmployees = 20;
    // this.totalOpenTickets = 30;
    // this.totalAssignedTickets = 25;
    // this.totalClosedTickets = 15;
    // this.totalTicketsInProgress = 10;
  }
}
