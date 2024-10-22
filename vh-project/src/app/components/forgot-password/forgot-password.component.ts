import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  email = '';

  constructor(private router: Router) {}

  sendOtp() {
    if (this.email) {
      alert('OTP Sent!');
      this.router.navigate(['/verify-otp']);
    } else {
      alert('Please enter a valid email');
    }
  }
}
