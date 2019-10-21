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
import { YogatypeComponent } from '../webapp/main/yogatype/yogatype.component';
import { DaitComponent } from '../webapp/main/dait/dait.component';
import { Type1Component } from '../webapp/main/yogatype/type1/type1.component';
import { AfteryogaComponent } from '../webapp/main/dait/afteryoga/afteryoga.component';
import { BeforeyogaComponent } from '../webapp/main/dait/beforeyoga/beforeyoga.component';
import { OnlineComponent } from '../webapp/main/yogaclass/online/online.component';
import { FreeclassesComponent } from '../webapp/main/yogaclass/freeclasses/freeclasses.component';
import { SearchComponent } from '../webapp/main/yogaclass/search/search.component';
import { ContactsComponent } from '../webapp/main/yogaclass/contacts/contacts.component';

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
  { path: 'yogatype', component: YogatypeComponent },
  { path: 'dait', component: DaitComponent },
  { path: 'type1', component: Type1Component },
  { path: 'afteryoga', component: AfteryogaComponent },
  { path: 'beforeyoga', component: BeforeyogaComponent },
  { path: 'online', component: OnlineComponent },
  { path: 'free', component: FreeclassesComponent },
  { path: 'search', component: SearchComponent },
  { path: 'contacts', component: ContactsComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
