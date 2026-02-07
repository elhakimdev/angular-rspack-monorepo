import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list.component';
import { ProductCategoriesComponent } from './components/product-categories.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent, ProductCategoriesComponent],
  template: `
    <div class="products-container">
      <h1>Products Module</h1>
      <product-categories></product-categories>
      <product-list></product-list>
    </div>
  `,
  styles: [`
    .products-container {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
  `]
})
export class AppComponent {}
