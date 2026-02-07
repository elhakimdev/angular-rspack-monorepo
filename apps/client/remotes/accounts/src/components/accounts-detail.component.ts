import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'accounts-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="detail-container">
      <h2>Account Details</h2>
      <div class="detail-info">
        <p><strong>Account Number:</strong> 123456789</p>
        <p><strong>Balance:</strong> $5,000.00</p>
        <p><strong>Status:</strong> Active</p>
      </div>
    </div>
  `,
  styles: [`
    .detail-container {
      border: 1px solid #ccc;
      padding: 15px;
      border-radius: 4px;
      margin: 10px 0;
      background-color: #f5f5f5;
    }
    .detail-info p {
      margin: 5px 0;
    }
  `]
})
export class AccountsDetailComponent {}
