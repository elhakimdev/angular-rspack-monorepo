import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TransactionData {
  id: string;
  type: string;
  amount: number;
  date: string;
  status: string;
}

@Component({
  selector: 'accounts-transactions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="transactions-container">
      <h3>Recent Transactions</h3>
      <div class="transaction-list">
        <div class="transaction-item" *ngFor="let tx of transactions">
          <span class="type">{{ tx.type }}</span>
          <span class="amount">{{ tx.amount | currency }}</span>
          <span class="date">{{ tx.date }}</span>
          <span class="status" [ngClass]="'status-' + tx.status.toLowerCase()">{{ tx.status }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .transactions-container {
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-top: 10px;
    }
    .transaction-list {
      margin-top: 10px;
    }
    .transaction-item {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 10px;
      padding: 10px;
      border-bottom: 1px solid #eee;
      align-items: center;
    }
    .amount {
      font-weight: bold;
      color: #28a745;
    }
    .status {
      padding: 4px 8px;
      border-radius: 3px;
      font-size: 12px;
    }
    .status-completed {
      background-color: #d4edda;
      color: #155724;
    }
    .status-pending {
      background-color: #fff3cd;
      color: #856404;
    }
  `]
})
export class AccountsTransactionsComponent {
  transactions: TransactionData[] = [
    { id: '1', type: 'Withdrawal', amount: -500, date: '2024-02-05', status: 'Completed' },
    { id: '2', type: 'Deposit', amount: 1000, date: '2024-02-04', status: 'Completed' },
    { id: '3', type: 'Transfer', amount: -250, date: '2024-02-03', status: 'Pending' },
    { id: '4', type: 'Deposit', amount: 2500, date: '2024-02-02', status: 'Completed' },
    { id: '5', type: 'Fee', amount: -5, date: '2024-02-01', status: 'Completed' },
  ];
}
