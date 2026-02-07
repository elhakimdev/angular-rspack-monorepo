import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel21Component } from './level-21.component';

@Component({
  selector: 'nesting-level-20',
  standalone: true,
  imports: [CommonModule, NestingLevel21Component],
  template: `
    <div class="level-box level-20">
      <div class="level-title">Level 20</div>
      <nesting-level-21></nesting-level-21>
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
export class NestingLevel20Component {}
