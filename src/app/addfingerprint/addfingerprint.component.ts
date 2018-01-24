import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FingerprintService} from '../fingerprint.service';


@Component({
  selector: 'app-addfingerprint',
  templateUrl: './addfingerprint.component.html',
  styleUrls: ['./addfingerprint.component.css']
})
export class AddFingerprintComponent implements OnInit {

  constructor(public fingerprintService: FingerprintService) {}

  ngOnInit() {
    const token = this.fingerprintService.generateToken();
    this.fingerprintService.addFingerprint(token);
    document.getElementById('token').innerText = token;
  }
}
