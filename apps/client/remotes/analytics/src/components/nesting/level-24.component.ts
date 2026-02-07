import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nesting-level-24',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="level-box level-24">
      <div class="level-title">Level 24 - Final Leaf Component</div>
      <div class="final-message">
        <p>🎉 Congratulations! You've reached the deepest level!</p>
        <p>This component hierarchy goes 25 levels deep (0-24).</p>
        <p>This is great for testing RSBuild's compilation performance.</p>
      </div>
    </div>
  `,
  styles: [`
    .level-box {
      border: 2px solid #5cb85c;
      padding: 15px;
      margin: 5px;
      border-radius: 4px;
      background: #dff0d8;
    }
    .level-title {
      font-weight: bold;
      color: #3c763d;
      margin-bottom: 10px;
      font-size: 16px;
    }
    .final-message {
      color: #3c763d;
    }
    .final-message p {
      margin: 5px 0;
    }
  `]
})
export class NestingLevel24Component {}
