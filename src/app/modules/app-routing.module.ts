import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../webapp/layout/home/home.component';
import { LoginComponent } from '../webapp/layout/login/login.component';
import { MainHomeComponent } from '../webapp/layout/main-home/main-home.component';
import { BmiComponent } from '../webapp/main/bmi/bmi.component';
import { HistoryComponent } from '../webapp/main/history/history.component';
import { BenefitComponent } from '../webapp/main/benefit/benefit.component';
import { WhyYogaComponent } from '../webapp/main/why-yoga/why-yoga.component';
import { YogaclassComponent } from '../webapp/main/yogaclass/yogaclass.component';
import { LearnyogaComponent } from '../webapp/main/learnyoga/learnyoga.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main-home', component: MainHomeComponent },
  { path: 'bmi', component: BmiComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'benefit', component: BenefitComponent },
  { path: 'why-yoga', component: WhyYogaComponent },
  { path: 'yogaclass', component: YogaclassComponent },
  { path: 'learnyoga', component: LearnyogaComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
