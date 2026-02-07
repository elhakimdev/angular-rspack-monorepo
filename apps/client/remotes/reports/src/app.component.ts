import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportGeneratorComponent } from './components/report-generator.component';
import { ReportViewerComponent } from './components/report-viewer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReportGeneratorComponent, ReportViewerComponent],
  template: `
    <div class="reports-container">
      <h1>Reports Module</h1>
      <report-generator></report-generator>
      <report-viewer></report-viewer>
    </div>
  `,
  styles: [`
    .reports-container {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
  `]
})
export class AppComponent {}
