import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsListComponent } from './components/accounts-list.component';
import { AccountsDetailComponent } from './components/accounts-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AccountsListComponent, AccountsDetailComponent],
  template: `
    <div class="accounts-container">
      <h1>Accounts Module</h1>
      <accounts-list></accounts-list>
      <accounts-detail></accounts-detail>
    </div>
  `,
  styles: [`
    .accounts-container {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
  `]
})
export class AppComponent {}
