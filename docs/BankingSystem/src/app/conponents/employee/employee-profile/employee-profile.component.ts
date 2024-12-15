import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent {

updateMobile(arg0: string) {
throw new Error('Method not implemented.');
}
updateEmail(arg0: string) {
throw new Error('Method not implemented.');
}
updateAddress(arg0: string) {
throw new Error('Method not implemented.');
}
newMobile: any;
newEmail: any;
newAddress: any;
constructor(public loginComponent: LoginComponent, public loginService:LoginService ){}
}
