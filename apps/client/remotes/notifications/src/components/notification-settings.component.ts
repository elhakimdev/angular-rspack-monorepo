import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'notification-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="settings-container">
      <h2>Notification Settings</h2>
      <div class="setting-item">
        <label>Email Notifications: <input type="checkbox" [checked]="true" /></label>
      </div>
      <div class="setting-item">
        <label>Push Notifications: <input type="checkbox" [checked]="true" /></label>
      </div>
      <div class="setting-item">
        <label>SMS Notifications: <input type="checkbox" [checked]="false" /></label>
      </div>
      <button class="save-btn">Save Settings</button>
    </div>
  `,
  styles: [`
    .settings-container {
      border: 1px solid #ccc;
      padding: 15px;
      border-radius: 4px;
      margin: 10px 0;
    }
    .setting-item {
      margin: 10px 0;
    }
    .save-btn {
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class NotificationSettingsComponent {}
