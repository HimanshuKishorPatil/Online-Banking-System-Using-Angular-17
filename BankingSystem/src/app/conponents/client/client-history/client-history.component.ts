import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-client-history',
  templateUrl: './client-history.component.html',
  styleUrls: ['./client-history.component.css']
})
export class ClientHistoryComponent {
isResultLoaded=false;
transactionArray: any;
constructor(private http:HttpClient,private loginService:LoginService){
     this.getAllTransaction()
}
 getAllTransaction(){
     this.http.get("http://localhost:5000/passbook/"+this.loginService.loggedInUser?.accountNumber).subscribe((resultData:any)=>{
  console.log(resultData);
  this.isResultLoaded=true;
  this.transactionArray=resultData;}
  )
}
}

