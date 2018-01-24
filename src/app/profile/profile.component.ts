import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import {FingerprintService} from '../fingerprint.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router, public fingerprintService: FingerprintService) { }

  ngOnInit() {}

  signOut() {
    this.authService.logout();
  }

  addFingerprint() {
    this.router.navigateByUrl('addfingerprint');
  }
  removeTwoFactorAuth() {
    this.fingerprintService.removeTwoFactorAuth();
  }
  addGoogleAuth() {
    this.router.navigateByUrl('addcode');
  }
}
