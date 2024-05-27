import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { EmployeeModel } from '../../core/models/API.Model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  loggedData: EmployeeModel = new EmployeeModel();
  isvisible: Boolean = true;

  constructor(private router: Router) {
    const localData = localStorage.getItem('ticketData');
    if (localData != null) {
      this.loggedData = JSON.parse(localData);
    }
  }

  logout() {
    localStorage.removeItem('ticketData');
    this.router.navigateByUrl('/login');
  }

}
