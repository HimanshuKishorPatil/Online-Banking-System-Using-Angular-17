import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { LoginService } from 'src/app/services/login.service';
import { UserModule } from 'src/app/models/user/user.module';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = "";
  password = ""
  role:String='';
  constructor
    (
      public toastr: ToastrService,
      public loginService: LoginService, private router: Router
    ) {
  }
  async login():Promise<void> {
    console.log("reached here")
    const bodyData = {
      "username": this.username,
      "password": this.password
    };
    console.log(bodyData)
    ;(await this.loginService.loginUser(bodyData)). subscribe( (resultData) => {
      console.log(resultData);
      if (resultData!=null) {
 
        this.loginService.isLogin = true;
        this.navigateOnBasisOfRole();

        this.toastr.success("Enjoy NetBanking", "Login Successful")

      }
      else {
        this.toastr.warning("Invalid credentials", "Try again!")
       
      }
    },

      error => {
        console.error("login failed", error);
      
      });
  }
  private navigateOnBasisOfRole(): void {
    switch(this.loginService.loggedInUser?.role) {
      case 'admin':
        {
          this.router.navigate(['../admin']);
          console.log("reach2")
        }
        break;
      case 'employee':
        this.router.navigate(['/employee']);
        break;
      case 'client':
        this.router.navigate(['/client']);
        break;
      default:
        this.router.navigate(['/login'])
    }

  }

}

