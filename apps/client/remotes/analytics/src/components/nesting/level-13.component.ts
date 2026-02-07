import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel14Component } from './level-14.component';

@Component({
  selector: 'nesting-level-13',
  standalone: true,
  imports: [CommonModule, NestingLevel14Component],
  template: `
    <div class="level-box level-13">
      <div class="level-title">Level 13</div>
      <nesting-level-14></nesting-level-14>
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
export class NestingLevel13Component {}
