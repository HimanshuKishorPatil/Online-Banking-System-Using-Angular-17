import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent {

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
constructor(public loginComponent: LoginComponent ,public loginService:LoginService){}
}
