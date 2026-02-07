import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel11Component } from './level-11.component';

@Component({
  selector: 'nesting-level-10',
  standalone: true,
  imports: [CommonModule, NestingLevel11Component],
  template: `
    <div class="level-box level-10">
      <div class="level-title">Level 10 (Halfway!)</div>
      <nesting-level-11></nesting-level-11>
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
      color: #d9534f;
      margin-bottom: 8px;
    }
  `]
})
export class NestingLevel10Component {}
