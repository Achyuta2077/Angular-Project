import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mfa-verification',
  templateUrl: './mfa-verification.component.html',
  styleUrls: ['./mfa-verification.component.css']
})
export class MfaVerificationComponent {
  verificationCode: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  // Simulated function to send a verification code via SMS or email
  sendVerificationCode() {
    // Implement your logic here to send the verification code
    console.log("Verification code sent!");
  }

  // Method to verify the code entered by the user
  verifyCode() {
    // Replace '123456' with the actual logic to verify the code
    if (this.verificationCode === '12@2077') {
      this.router.navigate(['/dash']); // Navigate to the dashboard if successful
    } else {
      this.errorMessage = 'Invalid verification code. Please try again.';
    }
  }
}
