import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel13Component } from './level-13.component';

@Component({
  selector: 'nesting-level-12',
  standalone: true,
  imports: [CommonModule, NestingLevel13Component],
  template: `
    <div class="level-box level-12">
      <div class="level-title">Level 12</div>
      <nesting-level-13></nesting-level-13>
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
export class NestingLevel12Component {}
