import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Import the Router to handle navigation

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string = 'Achyuta';  // Set username dynamically
  currentBalance: number = 30000;  // Set current balance dynamically
  recentTransactions: any[] = [];  // This array will hold transaction data.
  transferAmount: number = 0;  // Variable to store the transfer amount
  recipientAccount: string = '';  // Variable to store the recipient's account

  constructor(private router: Router) {}  // Inject Router

  ngOnInit(): void {
    this.fetchUserData();  // Call the method to fetch user data on initialization
  }

  // Method to fetch user data (dummy data for now)
  fetchUserData(): void {
    this.recentTransactions = [
      { date: '2024-10-11', description: 'Grocery Store', amount: -150 },
      { date: '2024-10-12', description: 'Salary Deposit', amount: 5000 },
      { date: '2024-10-13', description: 'Electricity Bill', amount: -200 }
    ];
  }

  // Method to transfer funds
  transferFunds(): void {
    if (this.transferAmount > 0 && this.recipientAccount) {
      this.currentBalance -= this.transferAmount;
      const newTransaction = {
        date: new Date().toISOString().split('T')[0],  // Current date
        description: `Transfer to ${this.recipientAccount}`,
        amount: -this.transferAmount
      };
      this.recentTransactions.unshift(newTransaction);  // Add new transaction to the recent transactions
      alert(`₹${this.transferAmount} has been transferred to account ${this.recipientAccount}`);
      this.transferAmount = 0;  // Reset transfer amount
      this.recipientAccount = '';  // Reset recipient account
    } else {
      alert('Please enter valid transfer details.');
    }
  }
}
