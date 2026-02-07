import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel18Component } from './level-18.component';

@Component({
  selector: 'nesting-level-17',
  standalone: true,
  imports: [CommonModule, NestingLevel18Component],
  template: `
    <div class="level-box level-17">
      <div class="level-title">Level 17</div>
      <nesting-level-18></nesting-level-18>
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
export class NestingLevel17Component {}
