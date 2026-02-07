import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-categories',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="categories-container">
      <h2>Categories</h2>
      <div class="category-buttons">
        <button *ngFor="let cat of categories" class="cat-btn">{{ cat }}</button>
      </div>
    </div>
  `,
  styles: [`
    .categories-container {
      border: 1px solid #ccc;
      padding: 15px;
      border-radius: 4px;
      margin: 10px 0;
    }
    .category-buttons {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .cat-btn {
      padding: 8px 16px;
      border: 1px solid #007bff;
      background: white;
      color: #007bff;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class ProductCategoriesComponent {
  categories = ['Electronics', 'Accessories', 'Software', 'Services'];
}
