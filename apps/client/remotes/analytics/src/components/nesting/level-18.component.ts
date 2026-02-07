import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel19Component } from './level-19.component';

@Component({
  selector: 'nesting-level-18',
  standalone: true,
  imports: [CommonModule, NestingLevel19Component],
  template: `
    <div class="level-box level-18">
      <div class="level-title">Level 18</div>
      <nesting-level-19></nesting-level-19>
    </div>
  `,
  styles: [`
    .level-box {
      border: 1px solid #ddd;
      padding: 10px;
      margin: 5px;
      border-radius: 4px;
      background: #fafafa;
    }
    .level-title {
      font-weight: bold;
      color: #333;
      margin-bottom: 8px;
    }
  `]
})
export class NestingLevel18Component {}
