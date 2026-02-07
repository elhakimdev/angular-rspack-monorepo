import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel6Component } from './level-6.component';

@Component({
  selector: 'nesting-level-5',
  standalone: true,
  imports: [CommonModule, NestingLevel6Component],
  template: `
    <div class="level-box level-5">
      <div class="level-title">Level 5</div>
      <nesting-level-6></nesting-level-6>
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
export class NestingLevel5Component {}
