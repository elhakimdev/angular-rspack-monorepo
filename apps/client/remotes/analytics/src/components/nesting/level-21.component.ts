import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel22Component } from './level-22.component';

@Component({
  selector: 'nesting-level-21',
  standalone: true,
  imports: [CommonModule, NestingLevel22Component],
  template: `
    <div class="level-box level-21">
      <div class="level-title">Level 21</div>
      <nesting-level-22></nesting-level-22>
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
export class NestingLevel21Component {}
