import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {FingerprintService} from '../fingerprint.service';

@Component({
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.component.html',
  styleUrls: ['./fingerprint.component.css']
})
export class FingerprintComponent implements OnInit {

  constructor(public fingerprintService: FingerprintService) {}

  ngOnInit() {
    this.fingerprintService.fingerprintAuth();
  }
}
