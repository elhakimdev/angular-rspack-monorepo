import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'report-generator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="generator-container">
      <h2>Report Generator</h2>
      <div class="form-group">
        <label>Select Report Type:</label>
        <select>
          <option *ngFor="let type of reportTypes">{{ type }}</option>
        </select>
      </div>
      <button class="generate-btn">Generate Report</button>
    </div>
  `,
  styles: [`
    .generator-container {
      border: 1px solid #ddd;
      padding: 15px;
      border-radius: 4px;
      margin: 10px 0;
    }
    .form-group {
      margin: 10px 0;
    }
    .generate-btn {
      padding: 8px 16px;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class ReportGeneratorComponent {
  reportTypes = ['Sales Report', 'Inventory Report', 'Customer Report', 'Financial Report'];
}
