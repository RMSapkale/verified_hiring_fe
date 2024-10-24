import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  email = '';
  constructor(private router: Router, private toastr: ToastrService) {}
  sendOtp() {
    if (this.email) {
      this.toastr.success('OTP Sent!', 'Success');
      this.router.navigate(['/verify-otp']);
    } else {
      this.toastr.error('Please enter a valid email', 'Error');
    }
  }
}
