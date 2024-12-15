import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent {

  name: any;
  mobile: any;

  accountNumber: any;
  amount: any;
  balance: any;
  
  constructor(public transactionService: TransactionService, public loginService: LoginService, private http: HttpClient) {
    this.getBalance()
  }
  async transfer() {


    let data = {
      "sender": this.loginService.loggedInUser?.accountNumber,
      "receiver": this.accountNumber,
      "amount": this.amount,
      "mobile": this.mobile,
      "name": this.name
    }
    console.log(data)
    
    await this.transactionService.transfer(data)
    await this.getBalance()

  }
  getBalance() {
    console.log("hhhhhhhhhhhh")
    this.http.get("http://localhost:5000/accountBalance/" + this.loginService.loggedInUser?.accountNumber).subscribe((resultData: any) => {
      console.log(resultData)
      this.balance = resultData[0].balance;
      
    }
    )
  }


}
