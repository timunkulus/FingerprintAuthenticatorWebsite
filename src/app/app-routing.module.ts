import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {FingerprintComponent} from './fingerprint/fingerprint.component';
import {AddFingerprintComponent} from './addfingerprint/addfingerprint.component';
import {CodeComponent} from './code/code.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'fingerprint', component: FingerprintComponent},
  { path: 'addfingerprint', component: AddFingerprintComponent},
  { path: 'code', component: CodeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
