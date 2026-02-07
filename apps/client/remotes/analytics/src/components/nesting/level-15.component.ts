import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel16Component } from './level-16.component';

@Component({
  selector: 'nesting-level-15',
  standalone: true,
  imports: [CommonModule, NestingLevel16Component],
  template: `
    <div class="level-box level-15">
      <div class="level-title">Level 15</div>
      <nesting-level-16></nesting-level-16>
    </div>
  `,
  styles: [`
    .level-box {
      border: 1px solid #ddd;
      padding: 10px;
      margin: 5px;
      border-radius: 4px;
      background: #f5f5f5;
    }
    .level-title {
      font-weight: bold;
      color: #333;
      margin-bottom: 8px;
    }
  `]
})
export class NestingLevel15Component {}
