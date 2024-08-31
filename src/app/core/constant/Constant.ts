export const Constant = {
    API_END_Point : {
        GET_DEPARTMENT: 'api/tickets/GetDepartments',
        CREATE_DEPARTMENT: 'api/tickets/CreateDepartment',
        UPDATE_DEPARTMENT: 'api/tickets/UpdateDepartment',
        DELETE_DEPARTMENT: 'api/tickets/DeleteDepartment?id=' ,
        GET_EMPLOYEE: 'api/tickets/GetEmployees',
        CREATE_EMPLOYEE: 'api/tickets/CreateEmployee',
        UPDATE_EMPLOYEE: 'api/tickets/UpdateEmployee',
        DELETE_EMPLOYEE: 'api/tickets/DeleteEmployee?id=' ,
        NEW_TICKET: 'api/tickets/CreateNewTicket',
        GET_TICKETS_CREATED_BY_EMPLOYEE: 'api/tickets/getTicketsCreatedByEmpId?id=',
        GET_NEW_TICKETS: 'api/tickets/getNewTickets?deptHeadEmpId=',
        GET_EMP_BY_DEPT: 'api/tickets/GetEmpByDept?id=',
        GET_ALL_TICKETS: 'api/tickets/GetAllTickets',
        ASSIGN_TICKET: 'api/tickets/assignRequest',
        GET_ASSIGNED_TICKETS_BY_EMPLOYEE: 'api/tickets/getAssignedTicketsByEmpId?id=',
        START_TICKET: 'api/tickets/startTicket?id=',
        CLOSE_TICKET: 'api/tickets/closeTicket?id=',
        GET_DASHBOARD_DETAILS: 'api/tickets/getDashboardDetails',
        LOGIN: 'api/tickets/login',
        REGISTER: 'api/tickets/register'
    },
    VALIDATION_MESSAGE:{
        REQUIRED: 'This is Required'
    }
}