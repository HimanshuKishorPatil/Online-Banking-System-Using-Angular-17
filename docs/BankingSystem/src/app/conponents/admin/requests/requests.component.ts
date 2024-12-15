import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {
  isResultLoaded: any;
  requestedNetbankingClientArray: any[] = [];
  mobile: any;
amount: any;

  constructor(private http: HttpClient,private toastr:ToastrService) {

    this.getAllRequests();

  }



  getAllRequests() {
    this.http.get("http://localhost:5000/requestedNetbankingClients")
      .subscribe((resultData: any) => {

        this.isResultLoaded = true;

        console.log(resultData);
        this.requestedNetbankingClientArray = resultData;

      });
  }


  rejectNetbanking(client: any) {
    console.log(client.mobile)
    this.http.delete("http://localhost:5000/deleteNetbankingClient/"+client.mobile)
      .subscribe((resultData: any) => {
        if (resultData) {
          this.toastr.warning("", "Request Rejected")
          this.getAllRequests();
        } else {
          this.toastr.error("", "Unable to delete request")
        }

      });
  }
  approveNetbanking(client: any) {
        const mobileData={
          "name": client.name,
          "mobile":client.mobile,
          "email":client.email,
          "amount":this.amount
        }
    this.http.post("http://localhost:5000/approveNetbankingClients",mobileData)
      .subscribe((resultData: any) => {
        if (resultData) {
          this.toastr.success("Account Created", "Registered Successful")
          this.getAllRequests();
        } else {
          this.toastr.error("", "Unable to Create Account")
        }



      });
  }
}
