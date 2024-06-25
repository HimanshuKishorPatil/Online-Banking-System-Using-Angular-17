import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent } from '../login/login.component';
import { LoginService } from 'src/app/services/login.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-nevbar',
  templateUrl: './nevbar.component.html',
  styleUrls: ['./nevbar.component.css'],

})
export class NevbarComponent {

  isMenuOpen = false;
  userId = 'Hkp@6999';
  loginForm: any;

  constructor( public toastr: ToastrService, public loginComponent: LoginComponent, public loginService: LoginService
,  public sanitizer:DomSanitizer
  ) {

  }

  logout() {
    this.loginService.isLogin = false;
    this.toastr.warning('Visit Again!', 'logout Successful');
  }



  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isActive(route: string) {
    return true;
  }


  //  _arrayBufferToBase64( bufferr: Iterable<ArrayBuffer> ) {
  //   var binary = '';
  //   var bytes = new Uint8Array( bufferr);
  //   var len = bytes.byteLength;
  //   for (var i = 0; i < len; i++) {
  //      binary += String.fromCharCode( bytes[ i ] );
  //   }
  //   return window.btoa( binary );
  // }
  // sanitize( url:string ) {
  //   return this.sanitizer.bypassSecurityTrustUrl(url);
  // }
  // profile pic
  // getProfilePictureSrc(): string | undefined {
  //   if (this.loginService.loggedInUser?.profilePic) {
  //     console.log(this.loginService.loggedInUser.profilePic)
  //     const base64String = this.arrayBufferToBase64(this.loginService.loggedInUser.profilePic)
  //     console.log(base64String)
  //     const src = 'data:image/jpeg;base64,${base64String}';
  //     console.log(src)
  //     return src
  //   }
  //   return undefined;
  // }




  // arrayBufferToBase64(buffer: ArrayBuffer): String {
  //   const binaryArray = new Uint8Array(buffer)
  //   console.log(binaryArray)
  //   const binaryString = Array.from(binaryArray).map(byte => String.fromCharCode(byte)).join('');
  //   console.log(binaryString)
  //   return btoa(binaryString)
  // }

  

}
