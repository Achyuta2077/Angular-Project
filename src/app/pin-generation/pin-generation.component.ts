import { Component } from '@angular/core';

@Component({
  selector: 'app-pin-generation',
  templateUrl: './pin-generation.component.html',
  styleUrls: ['./pin-generation.component.css']
})
export class PinGenerationComponent {
  generatedPin: string = '';
  isPinGenerated: boolean = false;
  router: any;

  constructor() { }

  // Method to generate a 4-digit PIN
  generatePin(): void {
    this.generatedPin = Math.floor(1000 + Math.random() * 9000).toString();
    this.isPinGenerated = true;
  }

  // Method to submit the generated PIN (For future integration, e.g., saving PIN in DB)
  submitPin(): void {
    if (this.generatedPin) {
      console.log("Generated PIN:", this.generatedPin);
      alert(`Your PIN ${this.generatedPin} has been generated successfully.`);
      // Implement API call or logic to save the PIN to the server/database
    }
  }
  navigateToLogin(): void {
    this.router.navigate(['/login']); // Adjust the route based on your routing configuration
  }


}
