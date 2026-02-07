import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestingLevel5Component } from './level-5.component';

@Component({
  selector: 'nesting-level-4',
  standalone: true,
  imports: [CommonModule, NestingLevel5Component],
  template: `
    <div class="level-box level-4">
      <div class="level-title">Level 4</div>
      <nesting-level-5></nesting-level-5>
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
export class NestingLevel4Component {}
