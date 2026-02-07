import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'accounts-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="list-container">
      <h2>Accounts List</h2>
      <ul>
        <li *ngFor="let account of accounts">{{ account.name }} - {{ account.type }}</li>
      </ul>
    </div>
  `,
  styles: [`
    .list-container {
      border: 1px solid #ddd;
      padding: 15px;
      border-radius: 4px;
      margin: 10px 0;
    }
  `]
})
export class AccountsListComponent {
  accounts = [
    { name: 'Savings Account', type: 'Savings' },
    { name: 'Checking Account', type: 'Checking' },
    { name: 'Investment Account', type: 'Investment' },
    { name: 'Credit Card', type: 'Credit' },
  ];
}
