import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { FingerprintComponent } from './fingerprint/fingerprint.component';
import { CodeComponent } from './code/code.component';
import { AddFingerprintComponent } from './addfingerprint/addfingerprint.component';
import {FingerprintService} from './fingerprint.service';

const firebaseConfig = {
  apiKey: 'AIzaSyCsfJZ3AQJuqfBqqike0OL3mEF1gAmJv2Q',
  authDomain: 'fingerprintauthenticator-524fb.firebaseapp.com',
  databaseURL: 'https://fingerprintauthenticator-524fb.firebaseio.com',
  projectId: 'fingerprintauthenticator-524fb',
  storageBucket: 'fingerprintauthenticator-524fb.appspot.com',
  messagingSenderId: '424933262452'
};

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    FingerprintComponent,
    CodeComponent,
    AddFingerprintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [ AuthService, FingerprintService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
