import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel7Component } from './level-7.component';

@Component({
  selector: 'nesting-level-6',
  standalone: true,
  imports: [CommonModule, NestingLevel7Component],
  template: `
    <div class="level-box level-6">
      <div class="level-title">Level 6</div>
      <nesting-level-7></nesting-level-7>
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
export class NestingLevel6Component {}
