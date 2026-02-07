import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ReportType {
  id: string;
  name: string;
  description: string;
  format: string;
  lastGenerated: string;
}

@Component({
  selector: 'report-templates',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="templates-container">
      <h3>Report Templates</h3>
      <div class="template-list">
        <div class="template-item" *ngFor="let template of templates">
          <div class="template-info">
            <h4>{{ template.name }}</h4>
            <p>{{ template.description }}</p>
            <small>Format: {{ template.format }} | Last: {{ template.lastGenerated }}</small>
          </div>
          <button class="use-btn">Use Template</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .templates-container {
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .template-list {
      margin-top: 15px;
    }
    .template-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      margin-bottom: 10px;
      background-color: #fafafa;
    }
    .template-info {
      flex: 1;
    }
    .template-info h4 {
      margin: 0 0 5px 0;
      color: #333;
    }
    .template-info p {
      margin: 0 0 5px 0;
      color: #666;
      font-size: 14px;
    }
    .use-btn {
      padding: 8px 16px;
      background-color: #17a2b8;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-left: 10px;
    }
  `]
})
export class ReportTemplatesComponent {
  templates: ReportType[] = [
    { id: '1', name: 'Monthly Sales', description: 'Overview of monthly sales', format: 'PDF, Excel', lastGenerated: '2024-02-01' },
    { id: '2', name: 'Customer Segment', description: 'Customer segmentation analysis', format: 'PDF', lastGenerated: '2024-01-28' },
    { id: '3', name: 'Revenue Trend', description: 'Revenue trends over time', format: 'Excel, CSV', lastGenerated: '2024-02-03' },
  ];
}
