import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { EmployeeModel } from '../../core/models/API.Model';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  loggedData: EmployeeModel = new EmployeeModel();

  constructor(){
    const localData = localStorage.getItem('ticketData');
    if(localData != null){
      this.loggedData = JSON.parse(localData);
    }
  }

}
