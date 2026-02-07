import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel23Component } from './level-23.component';

@Component({
  selector: 'nesting-level-22',
  standalone: true,
  imports: [CommonModule, NestingLevel23Component],
  template: `
    <div class="level-box level-22">
      <div class="level-title">Level 22</div>
      <nesting-level-23></nesting-level-23>
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
export class NestingLevel22Component {}
