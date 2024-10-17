import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) {} 

  ngOnInit(): void {
    this.authService.logout(); // Clear the token and log out
    // Optionally, redirect after a short delay
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000); // 3-second delay
  }
}
