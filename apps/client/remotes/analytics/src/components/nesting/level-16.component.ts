import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel17Component } from './level-17.component';

@Component({
  selector: 'nesting-level-16',
  standalone: true,
  imports: [CommonModule, NestingLevel17Component],
  template: `
    <div class="level-box level-16">
      <div class="level-title">Level 16</div>
      <nesting-level-17></nesting-level-17>
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
export class NestingLevel16Component {}
