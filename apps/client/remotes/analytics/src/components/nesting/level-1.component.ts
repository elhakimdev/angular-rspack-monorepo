import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel2Component } from './level-2.component';

@Component({
  selector: 'nesting-level-1',
  standalone: true,
  imports: [CommonModule, NestingLevel2Component],
  template: `
    <div class="level-box level-1">
      <div class="level-title">Level 1</div>
      <nesting-level-2></nesting-level-2>
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
export class NestingLevel1Component {}
