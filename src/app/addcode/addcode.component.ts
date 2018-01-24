import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addcode',
  templateUrl: './addcode.component.html',
  styleUrls: ['./addcode.component.css']
})
export class AddcodeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.value.code >= 100000 && formData.value.code <= 999999) {
      console.log(formData.value);
      this.router.navigateByUrl('profile');
    } else {
      alert('The authentication code you entered is not valid!');
    }
  }
}
