import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  constructor(private toastr: ToastrService) {}
  login() {
    if (this.email && this.password) {
      this.toastr.success('Login Successful!', 'Success');
    } else {
      this.toastr.error('Please enter valid credentials', 'Error');
    }
  }
}
