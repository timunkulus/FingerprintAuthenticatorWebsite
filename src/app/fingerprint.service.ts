import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class FingerprintService {

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {
  }

  generateToken() {
    let text = '';
    const possible =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    for (let i = 0; i < 6; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  fingerprintAuth() {
    const serviceName = 'User Study Fingerprint Authentication';
    // get userId
    const userId = this.afAuth.auth.currentUser.uid;
    const router = this.router;
    // get device id
    return firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
      const device_id = (snapshot.val() && snapshot.val().device_id) || 'Anonymous';
      // listen on the status value
      const fingerAuthRef = firebase.database().ref('/devices/' + device_id + '/services/' + serviceName);
      fingerAuthRef.on('value', function (data) {
        // continue login on approval
        if (data.val().status === 'APPROVED') {
          router.navigateByUrl('/profile');
        }
      });
    });
  }

  addFingerprint(token: string) {
    const serviceName = 'User Study Fingerprint Authentication';
    const userId = this.afAuth.auth.currentUser.uid;
    const router = this.router;
    // set token in database
    const tokenRef = firebase.database().ref('/device_registration/' + token);
    tokenRef.set({
      service_name: serviceName,
      user_id: userId
    });
    // wait for user to set deviceId
    const userRef = firebase.database().ref('/users/' + userId);
    userRef.on('value', function (data) {
      // as soon as deviceId set...
      if (data.val().device_id !== 'null') {
        const device_id = data.val().device_id;
        // ... go to the right path in db now and wait for approval of fingerprint
        const fingerAuthref = firebase.database().ref('/devices/' + device_id + '/services/' + serviceName);
        fingerAuthref.on('value', function (datas) {
          // as soon as we get status is APPROVED
          if (datas.val().status === 'APPROVED') {
            // save the users fingerprint method in db...
            userRef.update({
              twoFactor: 'FINGERPRINT'
            });
            // ... and navigate him back to profile
            router.navigateByUrl('/profile');
          }
        });
      }
    });
  }

  removeFingerprint() {
    const serviceName = 'User Study Fingerprint Authentication';
    const userId = this.afAuth.auth.currentUser.uid;
    const userRef = firebase.database().ref('/users/' + userId);
    userRef.update({
      twoFactor: 'none'
    });
  }
}
