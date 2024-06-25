import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { registerLocaleData } from '@angular/common';




import { HomeComponent } from './conponents/home/home.component';

import { RegisterComponent } from './conponents/register/register.component';
import { NetBankingComponent } from './conponents/net-banking/net-banking.component';
import { ApplicationStatusComponent } from './conponents/application-status/application-status.component';

import { AdminComponent } from './conponents/admin/admin.component';
import { AddEmployeeComponent } from './conponents/admin/add-employee/add-employee.component';
import { AdminProfileComponent } from './conponents/admin/admin-profile/admin-profile.component';


import { ClientComponent } from './conponents/client/client.component';

import { ClientProfileComponent } from './conponents/client/client-profile/client-profile.component';

import { EmployeeComponent } from './conponents/employee/employee.component';
import { EmployeeProfileComponent } from './conponents/employee/employee-profile/employee-profile.component';
import { AddClientComponent } from './conponents/admin/add-client/add-client.component';

import { ErrorPageComponent } from './conponents/error-page/error-page.component';

import { TransferMoneyComponent } from './conponents/client/transfer-money/transfer-money.component';
import { LoginComponent } from './conponents/login/login.component';
import { ResetComponent } from './conponents/reset/reset.component';

import { RequestsComponent } from './conponents/admin/requests/requests.component';
import { CreditComponent } from './conponents/employee/credit/credit.component';
import { HistoryComponent } from './conponents/history/history.component';
import { ClientHistoryComponent } from './conponents/client/client-history/client-history.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{path:"", component: HomeComponent},
                        {path:"login", component: LoginComponent},
                        {path:"register", component: RegisterComponent},
                        {path:"netBanking", component: NetBankingComponent},
                        {path:"applicationStatus", component: ApplicationStatusComponent},
                        {path:"reset", component :ResetComponent},

                        {path:"admin", component: AdminComponent,canActivate:[AuthGuard]},
                        {path:"admin/profile", component: AdminProfileComponent,canActivate:[AuthGuard]},
                        {path:"admin/addEmployee", component:AddEmployeeComponent,canActivate:[AuthGuard]},
                        {path:"admin/addClient", component:AddClientComponent,canActivate:[AuthGuard]},
                        {path:"admin/requests", component:RequestsComponent,canActivate:[AuthGuard]},
                        {path:"admin/history", component: HistoryComponent,canActivate:[AuthGuard]},
                        

                        {path:"employee", component: EmployeeComponent,canActivate:[AuthGuard]},
                        {path:"employee/profile", component: EmployeeProfileComponent,canActivate:[AuthGuard]},
                        {path:"employee/addClient", component: AddClientComponent,canActivate:[AuthGuard]},
                        {path:"employee/credit", component: CreditComponent,canActivate:[AuthGuard]},
                        {path:"employee/history", component: HistoryComponent,canActivate:[AuthGuard]},

                        {path:"client", component: ClientComponent,canActivate:[AuthGuard]},
                        {path:"client/profile", component: ClientProfileComponent,canActivate:[AuthGuard]},
                        {path:"client/history", component: ClientHistoryComponent,canActivate:[AuthGuard]},
        
                        {path:"client/transfer", component: TransferMoneyComponent,canActivate:[AuthGuard]},
                       
                        {path:"**", component: ErrorPageComponent},
                        
                        
                      ];
                       

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
