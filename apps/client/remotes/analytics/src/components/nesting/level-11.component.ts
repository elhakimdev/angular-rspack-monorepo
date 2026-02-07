import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel12Component } from './level-12.component';

@Component({
  selector: 'nesting-level-11',
  standalone: true,
  imports: [CommonModule, NestingLevel12Component],
  template: `
    <div class="level-box level-11">
      <div class="level-title">Level 11</div>
      <nesting-level-12></nesting-level-12>
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
export class NestingLevel11Component {}
