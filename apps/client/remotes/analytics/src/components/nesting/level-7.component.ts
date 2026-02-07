import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel8Component } from './level-8.component';

@Component({
  selector: 'nesting-level-7',
  standalone: true,
  imports: [CommonModule, NestingLevel8Component],
  template: `
    <div class="level-box level-7">
      <div class="level-title">Level 7</div>
      <nesting-level-8></nesting-level-8>
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
export class NestingLevel7Component {}
