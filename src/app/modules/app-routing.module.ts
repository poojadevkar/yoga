import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../webapp/layout/home/home.component';
import { LoginComponent } from '../webapp/layout/login/login.component';
import { MainHomeComponent } from '../webapp/layout/main-home/main-home.component';
import { BmiComponent } from '../webapp/main/bmi/bmi.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main-home', component: MainHomeComponent },
  { path: 'bmi', component: BmiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
