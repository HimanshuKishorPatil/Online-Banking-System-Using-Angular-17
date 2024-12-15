import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {



  constructor(private http: HttpClient, private toaster:ToastrService) { }

  newRegistration(registerUser: any){
   return this.http.post("http://localhost:5000/register", registerUser).subscribe((resultData:any) => {
    console.log(resultData)
    if(resultData){
          
           
         
         
         
      this.toaster.success("check Account Number after some days", "Register Successful")
    }
    else {
      this.toaster.warning("Invalid credentials", "Already Exist")
     
    }
    })
  }
}