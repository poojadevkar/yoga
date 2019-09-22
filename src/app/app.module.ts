import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { HomeComponent } from './webapp/layout/home/home.component';
import { NavbarComponent } from './webapp/layout/navbar/navbar.component';
import { LoginComponent } from './webapp/layout/login/login.component';
import { RegisterComponent } from './webapp/layout/register/register.component';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule

  ],
  providers: [LoginService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
