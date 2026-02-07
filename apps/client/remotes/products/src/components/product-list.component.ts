import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="list-container">
      <h2>Product List</h2>
      <ul>
        <li *ngFor="let product of products">{{ product.name }} - {{ product.price }}</li>
      </ul>
    </div>
  `,
  styles: [`
    .list-container {
      border: 1px solid #ddd;
      padding: 15px;
      border-radius: 4px;
      margin: 10px 0;
      background-color: #fff;
    }
  `]
})
export class ProductListComponent {
  products = [
    { name: 'Laptop', price: 999 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 75 },
    { name: 'Monitor', price: 299 },
  ];
}
