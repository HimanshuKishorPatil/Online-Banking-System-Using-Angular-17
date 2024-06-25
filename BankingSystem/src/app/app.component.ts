import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  template: `
 
`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'BankingSystem';
  constructor(public loginService:LoginService){}
  onInit(){
    
  }
}
