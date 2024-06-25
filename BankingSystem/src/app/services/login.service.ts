import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModule } from '../models/user/user.module';
import { Observable, catchError, map, throwError } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root',
  
})

export class LoginService {
 
 
  isExist = false;

  userArray: any[] = [];

  loggedInUser:UserModule | null=null;
  base64Data: any;
  retrievedImage: string | undefined;
  new: any;
  isLogin: boolean = false;
  constructor(private http:HttpClient, private domSanitizer:DomSanitizer) {
  
  }

  // add(a:any, b:any){

  //   console.log("addition")
  //   return a+b

  // }


async loginUser(bodyData: any):Promise<Observable<UserModule | null>>
  {

   return await this.http.post<any>("http://localhost:5000/login", bodyData).pipe(
  map((response)=>{
    console.log("reached")


  if(response && response.length!=0){
    console.log("reached1")
    console.log(response)
    console.log(response[0].profile_pic)

 
    let typed_array=new Uint8Array(response[0].profile_pic.byte)
    console.log(typed_array)
    const string_char=String.fromCharCode.apply(typed_array);
    console.log(string_char)
    let base64String = btoa(string_char);
     console.log(base64String)

    this.loggedInUser={
      id:response[0].id,
      role:response[0].role,
      accountStatus:response[0].account_status,
      accountNumber: response[0].account_number,
      name: response[0].name,
      mobile: response[0].mobile,
      email: response[0].email,
      address: response[0].address,
      aadhaar: response[0].aadhaar,
      pan: response[0].pan,
      
      dob: response[0].dob,
      
      
    
      username:response[0].username,
      password:response[0].password,
      balance:response[0].balance,
      profilePic:this.domSanitizer.bypassSecurityTrustUrl('data:image/jpg;base64, ' + base64String)

    };
console.log(this.loggedInUser.profilePic)
    // console.log(this.loggedInUser.profilePic)
    // this.base64Data=new Uint8Array(this.loggedInUser.profilePic)
    // console.log(this.base64Data)
    // const imgUrl= 'data:image/jpg;base64,' + btoa(String.fromCharCode(...this.base64Data))
    // console.log(imgUrl)
    // this.retrievedImage=imgUrl

    // console.log(this.new)
    // this.base64Data=this.new.picByte;
    // console.log(this.base64Data)
    // this.retrievedImage = 'data:image/jpg;base64,' + this.base64Data;
    // console.log(this.loggedInUser)
    // console.log(this.retrievedImage)
   

    return this.loggedInUser;
  }else{
    
    return null;
  }}),
    catchError((error)=>
  this.handleError(error)))
}


  handleError(error: any): Observable<never>{
    console.error(error)
    return throwError('Method not implemented.');
  }

  



  
   
   
   
    
    
  

  // async loginUser(bodyData: any): Promise<Observable<UserModule>> {

  //   return  this.http.post<UserModule>("http://localhost:5000/login", bodyData).pipe(
     
  //     catchError((error => {
  //       console.log("login failed", error);
  //        return throwError(error);
  //     }))
  //   )


  // }
}