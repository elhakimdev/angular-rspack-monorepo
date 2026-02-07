import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel9Component } from './level-9.component';

@Component({
  selector: 'nesting-level-8',
  standalone: true,
  imports: [CommonModule, NestingLevel9Component],
  template: `
    <div class="level-box level-8">
      <div class="level-title">Level 8</div>
      <nesting-level-9></nesting-level-9>
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
export class NestingLevel8Component {}
