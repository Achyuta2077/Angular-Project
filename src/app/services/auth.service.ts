import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logout() {
    throw new Error('Method not implemented.');
  }
  private users: { username: string; password: string }[] = []; // Store users in memory (for demo purposes)

  register(username: string, password: string): boolean {
    const userExists = this.users.some(user => user.username === username);
    if (userExists) {
      return false; // Registration failed
    }
    this.users.push({ username, password });
    return true; // Registration successful
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(user => user.username === username && user.password === password);
    if (user) {
      const fakeToken = '1000'; // Set token
      localStorage.setItem('token', fakeToken);
      return true; // Successful login
    }
    return false; // Failed login
  }
}

