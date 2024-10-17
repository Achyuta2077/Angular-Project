import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }
    
    //const registrationSuccessful = this.authService.register(this.username, this.password);
    const registrationSuccessful = this.authService.register(this.username.trim(), this.password.trim());


    if (registrationSuccessful) {
      this.successMessage = 'Registration successful! You can now log in.';
      this.errorMessage = '';
      // Optionally, redirect to login page after registration
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000); // Redirect after 2 seconds
    } else {
      this.errorMessage = 'Registration failed. Username may already exist.';
      this.successMessage = '';
    }
  }
}
