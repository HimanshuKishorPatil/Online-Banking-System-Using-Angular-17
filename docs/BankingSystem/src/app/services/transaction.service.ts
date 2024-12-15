import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transactionId= "not generated yet";
 

  constructor(private http:HttpClient,private toastr:ToastrService) { }

 async transfer(data:any) {
  console.log("reached")
  console.log(data)
    await this.http.post("http://localhost:5000/transfer",data).subscribe((resultData:any)=>{
      console.log(resultData)
      console.log(resultData.response)
      console.log(resultData.transactionID)
         if(resultData.response){
          this.transactionId= resultData.transactionID;
          return this.toastr.success("Send","Transaction Successful")
          
         }else{
          this.transactionId= resultData.transactionID;
         return this.toastr.error("Error while transfer","Transaction failed")
         }
         
    })
  }
}
