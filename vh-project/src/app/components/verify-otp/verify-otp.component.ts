import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css'],
})
export class VerifyOtpComponent {
  otp = '';

  constructor(private router: Router) {}

  verifyOtp() {
    if (this.otp === '1234') {
      alert('OTP Verified!');
      // Redirect to success page or dashboard here
    } else {
      alert('Invalid OTP!');
    }
  }
}
