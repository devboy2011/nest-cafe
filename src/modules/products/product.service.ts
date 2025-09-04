import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';

import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async createProduct(
    name: string,
    price: number,
    product_id: string,
  ): Promise<Product> {
    const created = new this.productModel({ product_id, name, price });
    return created.save();
  }

  async getProductById(id: number): Promise<Product> {
    const product = await this.productModel.findOne({ product_id: id }).exec();
    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return product;
  }

  updateProductById(): string {
    return 'UPDATE PRODUCT DETAIL';
  }

  deleteProductById(): string {
    return 'DELETE PRODUCT';
  }
}
