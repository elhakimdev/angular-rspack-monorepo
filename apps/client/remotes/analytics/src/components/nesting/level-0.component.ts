import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel1Component } from './level-1.component';

@Component({
  selector: 'nesting-level-0',
  standalone: true,
  imports: [CommonModule, NestingLevel1Component],
  template: `
    <div class="level-box level-0">
      <div class="level-title">Level 0</div>
      <nesting-level-1></nesting-level-1>
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
export class NestingLevel0Component {}
