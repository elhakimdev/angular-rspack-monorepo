import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'notification-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="list-container">
      <h2>Notifications</h2>
      <div class="notification-item" *ngFor="let notif of notifications">
        <strong>{{ notif.title }}</strong>
        <p>{{ notif.message }}</p>
        <small>{{ notif.timestamp }}</small>
      </div>
    </div>
  `,
  styles: [`
    .list-container {
      border: 1px solid #ddd;
      padding: 15px;
      border-radius: 4px;
      margin: 10px 0;
    }
    .notification-item {
      border-bottom: 1px solid #eee;
      padding: 10px 0;
    }
  `]
})
export class NotificationListComponent {
  notifications = [
    { title: 'System Update', message: 'New system update available', timestamp: '2 hours ago' },
    { title: 'Payment Received', message: 'Payment of $500 received', timestamp: '1 day ago' },
    { title: 'Alert', message: 'Unusual activity detected', timestamp: '3 days ago' },
  ];
}
