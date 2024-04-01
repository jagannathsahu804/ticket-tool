export interface APIResponse{
    message: string;
    status: boolean;
    values: any;
}

export class Department{
    deptId: number;
    deptName: string;
    deptHeadName: string;
    deptHeadEmpId: number;
    createdDate: Date;
    constructor(){
        this.createdDate = new Date();
        this.deptId = 0;
        this.deptName = '';
        this.deptHeadName = '';
        this.deptHeadEmpId = 0;
    } 
}

export class LoginModel{
    password: string;
    email: string;
    constructor(){
        this.password = '';
        this.email = '';
    } 
}

export class EmployeeModel {
    deptId: number
    email: string
    emp_id: number
    emp_name: string
    gender: string
    password: string
    phone: string
    role: any

    constructor(){
        this.deptId = 0;
        this.email = '';
        this.emp_id = 0;
        this.emp_name = '';
        this.gender = '';
        this.password = '';
        this.phone = '';
        this.role = '';
    }
  }