export interface APIResponse {
    message: string;
    status: boolean;
    values: any;
}

export class Department {
    deptId: number;
    deptName: string;
    deptHeadName: string;
    deptHeadEmpId: number;
    createdDate: Date;
    constructor() {
        this.createdDate = new Date();
        this.deptId = 0;
        this.deptName = '';
        this.deptHeadName = '';
        this.deptHeadEmpId = 0;
    }
}

export class LoginModel {
    password: string;
    email: string;
    constructor() {
        this.password = '';
        this.email = '';
    }
}

export class EmployeeModel {
    deptId: number
    deptName: string
    email: string
    emp_id: number
    emp_name: string
    gender: string
    password: string
    phone: string
    role: any

    constructor() {
        this.deptId = 0;
        this.deptName = '';
        this.email = '';
        this.emp_id = 0;
        this.emp_name = '';
        this.gender = '';
        this.password = '';
        this.phone = '';
        this.role = '';
    }
}

export class TicketList {
    ticketId: number;
    ticketNo: string;
    employeeId: number;
    createdDate: Date;
    expectedEndDate: Date;
    severity: string;
    deptId: number;
    completedDate: Date;
    assignedTo: number;
    state: string;
    requestDetails: string;
    contactNo: string;
    deptName: string;
    createdByEmployee: string;
    assignedToEmployee: string;
    constructor() {
        this.contactNo = '';
        this.deptName = '';
        this.createdByEmployee = '';
        this.assignedToEmployee = '';
        this.assignedTo = 0;
        this.completedDate = new Date();
        this.createdDate = new Date();
        this.deptId = 0;
        this.employeeId = 0;
        this.expectedEndDate = new Date();
        this.requestDetails = '';
        this.severity = '';
        this.state = '';
        this.ticketId = 0;
        this.ticketNo = '';
    }
}

export class NewTicketObj {
    employeeId: number;
    severity: string;
    deptId: number;
    state: string;
    requestDetails: string;
    constructor() {
        this.deptId = 0;
        this.employeeId = 0;
        this.requestDetails = '';
        this.severity = '';
        this.state = '';
    }
}