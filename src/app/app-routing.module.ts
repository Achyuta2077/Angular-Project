import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { PinGenerationComponent } from './pin-generation/pin-generation.component';
import { MfaVerificationComponent } from './mfa-verification/mfa-verification.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'dash',component:DashboardComponent},
  {path:'logout',component:LogoutComponent},
  {path:'reg',component:RegisterComponent},
  {path:'pin',component:PinGenerationComponent},
  {path:'verify',component:MfaVerificationComponent},
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
