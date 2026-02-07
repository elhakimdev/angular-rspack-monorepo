import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel4Component } from './level-4.component';

@Component({
  selector: 'nesting-level-3',
  standalone: true,
  imports: [CommonModule, NestingLevel4Component],
  template: `
    <div class="level-box level-3">
      <div class="level-title">Level 3</div>
      <nesting-level-4></nesting-level-4>
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
export class NestingLevel3Component {}
