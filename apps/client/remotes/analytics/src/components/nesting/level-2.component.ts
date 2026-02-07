import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel3Component } from './level-3.component';

@Component({
  selector: 'nesting-level-2',
  standalone: true,
  imports: [CommonModule, NestingLevel3Component],
  template: `
    <div class="level-box level-2">
      <div class="level-title">Level 2</div>
      <nesting-level-3></nesting-level-3>
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
export class NestingLevel2Component {}
