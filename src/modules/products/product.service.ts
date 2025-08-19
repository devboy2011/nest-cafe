import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getProducts(): string {
    return 'Get product list';
  }

  createProduct(): string {
    return 'POST PRODUCT';
  }

  getProductById(): string {
    return 'GET PRODUCT DETAIL';
  }

  updateProductById(): string {
    return 'UPDATE PRODUCT DETAIL';
  }

  deleteProductById(): string {
    return 'DELETE PRODUCT';
  }
}
