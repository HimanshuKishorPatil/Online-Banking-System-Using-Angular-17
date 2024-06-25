import { Component } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
newMobile: any;
newEmail: any;
newAddress: any;
updateAddress(arg0: string) {
throw new Error('Method not implemented.');
}
updateEmail(arg0: string) {
throw new Error('Method not implemented.');
}
updateMobile(arg0: string) {
throw new Error('Method not implemented.');
}

  constructor(public loginComponent: LoginComponent ,public loginService:LoginService){}

}
