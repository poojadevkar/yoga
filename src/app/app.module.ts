import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import {MatSelectModule} from '@angular/material/select';

import { HomeComponent } from './webapp/layout/home/home.component';
import { NavbarComponent } from './webapp/layout/navbar/navbar.component';
import { LoginComponent } from './webapp/layout/login/login.component';
import { RegisterComponent } from './webapp/layout/register/register.component';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponent } from './shared/shared/shared.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginModalService } from './services/login-modal.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { MainHomeComponent } from './webapp/layout/main-home/main-home.component';
import { TranslateService } from './services/translate.service';
import { TranslatePipe } from './pipes/translate.pipe';
import { BmiComponent } from './webapp/main/bmi/bmi.component';
import { HistoryComponent } from './webapp/main/history/history.component';
import { BenefitComponent } from './webapp/main/benefit/benefit.component';
import { WhyYogaComponent } from './webapp/main/why-yoga/why-yoga.component';
import { YogaclassComponent } from './webapp/main/yogaclass/yogaclass.component';
import { LearnyogaComponent } from './webapp/main/learnyoga/learnyoga.component';
import { YogatypeComponent } from './webapp/main/yogatype/yogatype.component';
import { DaitComponent } from './webapp/main/dait/dait.component';
import { Type1Component } from './webapp/main/yogatype/type1/type1.component';
import { AfteryogaComponent } from './webapp/main/dait/afteryoga/afteryoga.component';
import { BeforeyogaComponent } from './webapp/main/dait/beforeyoga/beforeyoga.component';
library.add(fas, far);

export function setupTranslateFactory(
  // tslint:disable-next-line:ban-types
  service: TranslateService): Function {
  return () => service.use('en');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    SharedComponent,
    MainHomeComponent,
    TranslatePipe,
    BmiComponent,
    HistoryComponent,
    BenefitComponent,
    WhyYogaComponent,
    YogaclassComponent,
    LearnyogaComponent,
    YogatypeComponent,
    DaitComponent,
    Type1Component,
    AfteryogaComponent,
    BeforeyogaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    MatSelectModule

  ],
  providers: [LoginService, RegisterService, LoginModalService, TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
