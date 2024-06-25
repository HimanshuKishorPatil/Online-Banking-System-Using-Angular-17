import { Component } from '@angular/core';
import { ApplicationStatusService } from 'src/app/services/application-status.service';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent {

  aadhaar:any;
  name:any;

  constructor(public applicationStatus: ApplicationStatusService) {

  }
  async getAccountStatus() {
    let searchUser = {
      "name": this.name,
      "aadhaar": this.aadhaar
    }
    console.log(searchUser)
    await this.applicationStatus.searchAccount(searchUser)
  }
}
