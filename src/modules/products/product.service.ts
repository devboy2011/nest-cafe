import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, category: 2, price: 18000, productName: 'Black Coffee' },
    { id: 2, category: 2, price: 20000, productName: 'Bac siu' },
    { id: 3, category: 1, price: 25000, productName: 'Matcha Latte' },
    { id: 4, category: 1, price: 25000, productName: 'Latte' },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  createProduct(): string {
    return 'POST PRODUCT';
  }

  getProductById(id: number): Product {
    return (
      this.products.find((item) => item.id === Number(id)) || ({} as Product)
    );
  }

  updateProductById(): string {
    return 'UPDATE PRODUCT DETAIL';
  }

  deleteProductById(): string {
    return 'DELETE PRODUCT';
  }
}
