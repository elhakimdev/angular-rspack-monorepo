import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel0Component } from './components/nesting/level-0.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NestingLevel0Component],
  template: `
    <div class="analytics-container">
      <h1>Analytics Module - Deep Nesting Performance Test</h1>
      <p class="description">This component structure goes 25 levels deep for performance testing</p>
      <nesting-level-0></nesting-level-0>
    </div>
  `,
  styles: [`
    .analytics-container {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    .description {
      color: #666;
      font-size: 14px;
      margin-bottom: 20px;
    }
  `]
})
export class AppComponent {}
