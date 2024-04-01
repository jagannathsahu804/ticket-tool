import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../core/services/department.service';
import { APIResponse, Department, EmployeeModel } from '../../core/models/API.Model';
import { CommonModule } from '@angular/common';
import { NaPipe } from '../../shared/pipes/na.pipe';
import { EmployeeService } from '../../core/services/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule, CommonModule, NaPipe],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit {

  departmentList: Department[] = [];
  employee$: Observable<EmployeeModel[]> | undefined;
  //For binding 
  departmentObj: Department = new Department();
  empId: any;
  constructor(private deptService: DepartmentService, private empService: EmployeeService) {
    this.employee$ = this.empService.getEmployeeList(); //observable
  }

  ngOnInit(): void {
    this.loadDepartment();
  }

  loadDepartment() {
    this.deptService.getAllDept().subscribe((res: APIResponse) => {
      this.departmentList = res.values;
    })
  }

  onSave() {
    this.employee$?.subscribe(employees => {
      const selectedEmployee = employees.find(emp => emp.emp_id == this.empId);
      if (selectedEmployee) {
        this.departmentObj.deptHeadName = selectedEmployee.emp_name;
        this.deptService.createNewDept(this.departmentObj).subscribe((res: APIResponse) => {
          if (res.status) {
            alert('Department created')
            this.loadDepartment();
          } else {
            alert(res.message)
          }
        })
      }
    });
  }

}
