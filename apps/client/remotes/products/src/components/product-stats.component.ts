import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProductStats {
  productId: string;
  name: string;
  price: number;
  inStock: number;
  sold: number;
  rating: number;
}

@Component({
  selector: 'product-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stats-container">
      <h3>Product Statistics</h3>
      <div class="stats-grid">
        <div class="stat-card" *ngFor="let stat of stats">
          <div class="stat-header">
            <h4>{{ stat.name }}</h4>
            <span class="rating">⭐ {{ stat.rating }}</span>
          </div>
          <div class="stat-body">
            <p><strong>Price:</strong> {{ stat.price }}</p>
            <p><strong>Stock:</strong> {{ stat.inStock }} units</p>
            <p><strong>Sold:</strong> {{ stat.sold }} units</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .stats-container {
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background-color: #f9f9f9;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
      margin-top: 15px;
    }
    .stat-card {
      background: white;
      padding: 15px;
      border-radius: 4px;
      border: 1px solid #e0e0e0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .stat-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
    }
    .rating {
      font-size: 14px;
      color: #ffc107;
    }
  `]
})
export class ProductStatsComponent {
  stats: ProductStats[] = [
    { productId: '1', name: 'Pro Laptop', price: 1299, inStock: 45, sold: 1200, rating: 4.8 },
    { productId: '2', name: 'Wireless Mouse', price: 29.99, inStock: 500, sold: 5600, rating: 4.5 },
    { productId: '3', name: 'Mechanical Keyboard', price: 149.99, inStock: 120, sold: 890, rating: 4.7 },
    { productId: '4', name: '4K Monitor', price: 499.99, inStock: 30, sold: 450, rating: 4.6 },
  ];
}
