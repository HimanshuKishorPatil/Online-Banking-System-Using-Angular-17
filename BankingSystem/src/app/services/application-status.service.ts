import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStatusService {
  accountNum: any;
  accountStatus: any;
  constructor(private http: HttpClient) { }

  searchAccount(searchUser: any) {
    return this.http.post("http://localhost:5000/applicationStatus", searchUser).subscribe((resultData: any) => {
      console.log(resultData)
      if (resultData[0] == null) {
        this.accountNum = "Not generated yet";
        this.accountStatus = "go and register";
      }
      else if (resultData[0].account_number == null) {
        this.accountNum = "Not generated yet";
        this.accountStatus = resultData[0].account_status;
      }

      else {
        this.accountNum = resultData[0].account_number;
        this.accountStatus = resultData[0].account_status;
      }

    })

  }
}
