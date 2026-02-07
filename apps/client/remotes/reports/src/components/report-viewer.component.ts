import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'report-viewer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="viewer-container">
      <h2>Report Viewer</h2>
      <div class="report-content">
        <table class="report-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of reportData">
              <td>{{ row.date }}</td>
              <td>{{ row.amount }}</td>
              <td>{{ row.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .viewer-container {
      border: 1px solid #ccc;
      padding: 15px;
      border-radius: 4px;
      margin: 10px 0;
    }
    .report-table {
      width: 100%;
      border-collapse: collapse;
    }
    .report-table th, .report-table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
  `]
})
export class ReportViewerComponent {
  reportData = [
    { date: '2024-01-01', amount: 1500, status: 'Completed' },
    { date: '2024-01-02', amount: 2300, status: 'Completed' },
    { date: '2024-01-03', amount: 1800, status: 'Pending' },
  ];
}
