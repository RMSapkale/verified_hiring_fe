import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css'],
})
export class VerifyOtpComponent {
  otp = '';
  constructor(private router: Router, private toastr: ToastrService) {}
  verifyOtp() {
    this.otp === '1234'
      ? this.toastr.success('OTP Verified!', 'Success')
      : this.toastr.error('Invalid OTP!', 'Error');
  }
}
