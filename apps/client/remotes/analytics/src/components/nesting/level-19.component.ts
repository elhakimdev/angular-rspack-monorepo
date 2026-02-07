import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel20Component } from './level-20.component';

@Component({
  selector: 'nesting-level-19',
  standalone: true,
  imports: [CommonModule, NestingLevel20Component],
  template: `
    <div class="level-box level-19">
      <div class="level-title">Level 19</div>
      <nesting-level-20></nesting-level-20>
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
export class NestingLevel19Component {}
