import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class CodeService {

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {
  }

  addCode() {
    const userId = this.afAuth.auth.currentUser.uid;
    const router = this.router;
    const userRef = firebase.database().ref('/users/' + userId);
    // save the users fingerprint method in db...
    userRef.update({
      twoFactor: 'CODE'
    });
    // ... and navigate him back to profile
    router.navigateByUrl('/profile');
  }
}
