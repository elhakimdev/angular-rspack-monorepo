import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel24Component } from './level-24.component';

@Component({
  selector: 'nesting-level-23',
  standalone: true,
  imports: [CommonModule, NestingLevel24Component],
  template: `
    <div class="level-box level-23">
      <div class="level-title">Level 23</div>
      <nesting-level-24></nesting-level-24>
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
export class NestingLevel23Component {}
