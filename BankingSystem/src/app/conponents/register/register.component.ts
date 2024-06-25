import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent {

  name: any;
  profilePic: any;
  mobile: any;
  email: any;
  aadhaar: any;
  pan: any;
  dob: any;
  address: any;
  isRegister!: boolean;



  constructor(protected toaster: ToastrService, protected registerService: RegisterService) {
  }

  async register() {

    const isValid = this.formValidation(this.name, this.email, this.mobile, this.aadhaar, this.address)
    if (isValid) {
      let registerUser = {
        "name": this.name,
        "email": this.email,
        "mobile": this.mobile,
        "aadhaar": this.aadhaar,
        "pan": this.pan,
        "address": this.address,
        "dob": this.dob,
        "profile_pic": this.profilePic
      }
      await this.registerService.newRegistration(registerUser)


    }


  }

  handlePhotoUpload(event: any) {
    const file = event.target.files[0];
    // Implement photo upload logic here
  }
  formValidation(name: any, email: any, mobile: any, aadhaar: any, address: any) {

    // checking name length
    if (name.length < 2 || name.length > 22) {

      this.toaster.error("", "Name length  should be more than 2 and less than 23", {
        positionClass: 'toast-top-center'
      })
      return false;
    }
    // checking email
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      this.toaster.error("Please enter  a valid email!", "", {
        positionClass: 'toast-top-center'
      })

      return false;
    }

    // checking phone number
    if (!mobile.toString().match(/^[0-9]{10}$/)) {
      this.toaster.error("Phone number must be 10 characters long number and first digit can't be 0!", "", {
        positionClass: 'toast-top-center'
      })

      return false;
    }

    if (!aadhaar.toString().match(/^[0-9]{12}$/)) {
      this.toaster.error("aadhaar must be 12 characters long number!", "", {
        positionClass: 'toast-top-center'
      })

      return false; 
    }
    // checking name length
    if (address.length < 2 || address.length > 30) {
      this.toaster.error("adress length should be more than 2 and less than 21", "", {
        positionClass: 'toast-top-center'
      })

      return false;
    }
    return true;
  }

}
