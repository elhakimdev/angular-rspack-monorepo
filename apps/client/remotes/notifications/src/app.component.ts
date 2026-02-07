import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationListComponent } from './components/notification-list.component';
import { NotificationSettingsComponent } from './components/notification-settings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NotificationListComponent, NotificationSettingsComponent],
  template: `
    <div class="notifications-container">
      <h1>Notifications Module</h1>
      <notification-list></notification-list>
      <notification-settings></notification-settings>
    </div>
  `,
  styles: [`
    .notifications-container {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
  `]
})
export class AppComponent {}
