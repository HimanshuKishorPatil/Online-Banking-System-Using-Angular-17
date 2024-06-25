import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NetBankingService } from 'src/app/services/net-banking.service';

@Component({
  selector: 'app-net-banking',
  templateUrl: './net-banking.component.html',
  styleUrls: ['./net-banking.component.css']
})
export class NetBankingComponent {
  name: any;
  accountNum: any;
  username: any;
  password: any;
  confirmPassword: any;
  constructor(private toaster: ToastrService,private netBankingService:NetBankingService) {

  }

  async netBanking() {
    const isvalid = this.formValidation(this.name, this.accountNum, this.username, this.password, this.confirmPassword)
    if (isvalid) {
      let netBankingUserDetails = {
        "name": this.name,
        "account_number":this.accountNum,
        "username":this.username,
        "password":this.password
      }
      console.log(netBankingUserDetails)
      await this.netBankingService.netBanking(netBankingUserDetails)
    }
  }






  formValidation(name: any, accountNum: any, username: any, password: any, confirmPassword: any) {
    if (name.length < 2 || name.length > 22) {

      this.toaster.error("", "Name length should be more than 2 and less than 23", {
        positionClass: 'toast-top-center'
      })
      return false;
    }

    if (!accountNum.toString().match(/^[1-9][0-9]{9}$/)) {
      this.toaster.error("account number invalid!", "", {
        positionClass: 'toast-top-center'
      })

      return false;
    }
    if (password != confirmPassword) {
      this.toaster.error("Confirm password missmatch", "", {
        positionClass: 'toast-top-center'
      })

      return false;
    }
    return true;

  }
}