import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router) {}

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        const serviceName = 'User Study Fingerprint Authentication';
        const userId = this.afAuth.auth.currentUser.uid;
        const router = this.router;
        // get users authentication method
        return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
          const twoFactor = (snapshot.val() && snapshot.val().twoFactor) || 'Anonymous';
          if (twoFactor === 'FINGERPRINT' ) {
            const device_id = (snapshot.val() && snapshot.val().device_id) || 'Anonymous';
            // request approval
            firebase.database().ref('/devices/' + device_id + '/services/' + serviceName).update({
              status: 'SIGN_IN_APPROVAL_NEEDED'
            });
            router.navigateByUrl('/fingerprint');
            // no auth method? go to profile directly
          } else if (twoFactor === 'CODE') {
            router.navigateByUrl('/code');
          } else if (twoFactor === 'none') {
            router.navigateByUrl('/profile');
          }
        });
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      });
  }

  emailSignup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Sucess', value);
        // get logged in User and device id
        const itemRef = this.db.object('/users/' + value.uid);
        itemRef.set({
          twoFactor : 'none',
          deviceID : null
        });
        this.router.navigateByUrl('/login');
      })
      .catch(error => {
        console.log('Something went wrong: ', error);
      });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }


}
