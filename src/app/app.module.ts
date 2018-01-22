import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { FingerprintComponent } from './fingerprint/fingerprint.component';
import { CodeComponent } from './code/code.component';

const firebaseConfig = {
  apiKey: 'AIzaSyAkm80TneBFeU5bAoZpNhWj3VyxQX3TF4g',
  authDomain: 'crossdevicefingerprint.firebaseapp.com',
  databaseURL: 'https://crossdevicefingerprint.firebaseio.com',
  projectId: 'crossdevicefingerprint',
  storageBucket: 'crossdevicefingerprint.appspot.com',
  messagingSenderId: '504507830412'
};
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    FingerprintComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
