import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'


import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NevbarComponent } from './conponents/nevbar/nevbar.component';
import { SidebarComponent } from './conponents/sidebar/sidebar.component';

import { LoginComponent } from './conponents/login/login.component';
import { RegisterComponent } from './conponents/register/register.component';
import { AdminComponent } from './conponents/admin/admin.component';
import { ClientComponent } from './conponents/client/client.component';
import { EmployeeComponent } from './conponents/employee/employee.component';

import { GetBalanceComponent } from './conponents/client/get-balance/get-balance.component';
import { TransferMoneyComponent } from './conponents/client/transfer-money/transfer-money.component';

import { AddEmployeeComponent } from './conponents/admin/add-employee/add-employee.component';

import { ErrorPageComponent } from './conponents/error-page/error-page.component';
import { ClientProfileComponent } from './conponents/client/client-profile/client-profile.component';
import { AdminProfileComponent } from './conponents/admin/admin-profile/admin-profile.component';
import { EmployeeProfileComponent } from './conponents/employee/employee-profile/employee-profile.component';
import { NetBankingComponent } from './conponents/net-banking/net-banking.component';
import { HomeComponent } from './conponents/home/home.component';
import { EmployeeprofileEditComponent } from './conponents/employee/employeeprofile-edit/employeeprofile-edit.component';
import { AdminProfileeEditComponent } from './conponents/admin/admin-profilee-edit/admin-profilee-edit.component';
import { ClientProfileEditComponent } from './conponents/client/client-profile-edit/client-profile-edit.component';
import { ApplicationStatusComponent } from './conponents/application-status/application-status.component';
import { DARK_MODE_OPTIONS } from 'angular-dark-mode';
import { LayoutModule } from '@angular/cdk/layout';

import { ResetComponent } from './conponents/reset/reset.component';
import { HistoryComponent } from './conponents/history/history.component';
import { RequestsComponent } from './conponents/admin/requests/requests.component';
import { CreditComponent } from './conponents/employee/credit/credit.component';
import { ClientHistoryComponent } from './conponents/client/client-history/client-history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaxLengthDirective } from './max-length.directive';

// import{PasswordMatchDirective} from './reset-password/Password-Match.directive'





@NgModule({
  declarations: [


    AppComponent,
    NevbarComponent,
    SidebarComponent,


    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ClientComponent,
    EmployeeComponent,

    GetBalanceComponent,
    TransferMoneyComponent,


    AddEmployeeComponent,

    ErrorPageComponent,
    ClientProfileComponent,
    AdminProfileComponent,
    EmployeeProfileComponent,
    NetBankingComponent,
    HomeComponent,
    EmployeeprofileEditComponent,
    AdminProfileeEditComponent,
    ClientProfileEditComponent,
    ApplicationStatusComponent,


    ResetComponent,
    HistoryComponent,
    RequestsComponent,
    CreditComponent,
    ClientHistoryComponent,
    MaxLengthDirective,

    // PasswordMatchDirective   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    LayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule



  ],

  providers: [{
    provide: DARK_MODE_OPTIONS,
    useValue: {

    }
  }, HttpClient, LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
