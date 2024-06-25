import { SafeUrl } from "@angular/platform-browser";

export interface UserModule {

  id: number;
  role:String;
  accountStatus:String;
  accountNumber: String;
  name: String;
  mobile: number;
  email: String;
  address:String;
  aadhaar: String;
  pan: String;
  
  dob: String;
  
  

  username:String;
  password:String;
  balance:number;
  profilePic:SafeUrl;

  
  

}
