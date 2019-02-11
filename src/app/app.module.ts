import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TraningComponent } from './traning/traning.component';
import { CurrentTraningComponent } from './traning/current-traning/current-traning.component';
import { NewTraningComponent } from './traning/new-traning/new-traning.component';
import { PastTraningComponent } from './traning/past-traning/past-traning.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TraningComponent,
    CurrentTraningComponent,
    NewTraningComponent,
    PastTraningComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
