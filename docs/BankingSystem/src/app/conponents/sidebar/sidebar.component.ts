import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { LoginService } from 'src/app/services/login.service';

import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 public sidebarShow: boolean = true;

adminLogin: boolean = true;
employeeLogin: boolean = false;
clientLogin: boolean = false;
userRole= this.loginService.loggedInUser?.role;


constructor( public loginService:LoginService, public loginComponent:LoginComponent){}

toggleSidebar() {
  throw new Error('Method not implemented.');
  }
}
