import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NetBankingService {

  constructor(private http: HttpClient, private toaster: ToastrService) { }



  async netBanking(netBankingUserDetails: any) {
    return await this.http.post("http://localhost:5000/netBanking", netBankingUserDetails).subscribe((resultData: any) => {
      if (resultData) {





        this.toaster.success("Login to your account", "NetBanking Created Successfully")
      }
      else {
        this.toaster.warning("Invalid credentials", "Already Exist")

      }
    })

  }
}
