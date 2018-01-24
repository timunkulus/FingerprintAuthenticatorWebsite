import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.value.code >= 100000 && formData.value.code <= 999999) {
      console.log(formData.value);
      this.router.navigateByUrl('/profile');
    } else {
      alert('The authentication code you entered is not valid!');
    }
  }
}
