import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel15Component } from './level-15.component';

@Component({
  selector: 'nesting-level-14',
  standalone: true,
  imports: [CommonModule, NestingLevel15Component],
  template: `
    <div class="level-box level-14">
      <div class="level-title">Level 14</div>
      <nesting-level-15></nesting-level-15>
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
export class NestingLevel14Component {}
