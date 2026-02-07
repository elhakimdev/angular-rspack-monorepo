import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel10Component } from './level-10.component';

@Component({
  selector: 'nesting-level-9',
  standalone: true,
  imports: [CommonModule, NestingLevel10Component],
  template: `
    <div class="level-box level-9">
      <div class="level-title">Level 9</div>
      <nesting-level-10></nesting-level-10>
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
export class NestingLevel9Component {}
