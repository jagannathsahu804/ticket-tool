import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { DepartmentService } from '../../core/services/department.service';
import { APIResponse, Department, EmployeeModel } from '../../core/models/API.Model';
import { CommonModule } from '@angular/common';
import { NaPipe } from '../../shared/pipes/na.pipe';
import { EmployeeService } from '../../core/services/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, CommonModule, NaPipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  form: FormGroup;
  deptList$: Observable<Department[]> | undefined;
  employeeList: EmployeeModel[] = [];
  isEmpFormVisible: Boolean = false;
  isEdit: Boolean = false;
  employeeObj: EmployeeModel = new EmployeeModel();
  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private deptSrv: DepartmentService) {
    this.deptList$ = deptSrv.getDeptList();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      deptHeadEmpId: [null]
    });
    this.loadAllEmployees();
  }

  loadAllEmployees() {
    this.employeeService.getAllEmployee().subscribe((res: APIResponse) => {
      this.employeeList = res.values;
    })
  }

  saveEmp() {
    this.employeeService.createNewEmployee(this.employeeObj).subscribe((res: APIResponse) => {
      if (res.status) {
        this.loadAllEmployees()
      }
      alert(res.message)
    })
  }

  resetEmp() {
    this.employeeObj = new EmployeeModel();
  }

  onClose() {
    this.isEmpFormVisible = false;
    this.employeeObj = new EmployeeModel();
    if (this.isEdit) this.isEdit = false;
  }

  onEdit(item: EmployeeModel) {
    this.isEmpFormVisible = true
    this.employeeObj = item;
    this.isEdit = true;
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure you want to Delete ??");
    if (isDelete) {
      this.employeeService.deleteEmployee(id).subscribe((res: APIResponse) => {
        if (res.status) {
          alert("Employee Deleted Successfully!!");
          this.loadAllEmployees();
        } else {
          alert(res.message);
        }
      })
    }
  }

  onUpdate() {
    this.employeeService.updateEmployee(this.employeeObj).subscribe((res: APIResponse) => {
      if (res.status) {
        this.employeeObj = new EmployeeModel();
        this.loadAllEmployees();
        this.isEmpFormVisible = false;
      }
      alert(res.message);
    })
  }
}
