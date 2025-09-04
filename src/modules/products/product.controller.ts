import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
  Body,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { Product } from 'src/models/product.model';

@Controller('api/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/all')
  async getProducts() {
    try {
      return new ResponseData<Product[]>(
        await this.productService.getProducts(),
        HttpStatus.SUCCESS,
        'Product list retrieved successfully',
      );
    } catch (error) {
      console.log(error);

      return new ResponseData<Product[]>(
        [],
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Post()
  async createProduct(
    @Body() body: { name: string; price: number; product_id: string },
  ) {
    try {
      return new ResponseData<Product>(
        await this.productService.createProduct(
          body.name,
          body.price,
          body.product_id,
        ),
        HttpStatus.SUCCESS,
        'Product posted successfully',
      );
    } catch (error) {
      console.log(error);

      return new ResponseData<string>('', HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Get('/:id')
  async getProductById(
    @Param('id') id: number,
  ): Promise<ResponseData<Product>> {
    try {
      return new ResponseData<Product>(
        await this.productService.getProductById(id),
        HttpStatus.SUCCESS,
        'Product retrieved successfully',
      );
    } catch (error) {
      console.log(error);

      throw new HttpException(
        {
          status: HttpStatus.ERROR,
          message: 'Product retrieved failed',
        },
        HttpStatus.ERROR,
      );
    }
  }

  @Put('/:id')
  updateProductById(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.productService.updateProductById(),
        HttpStatus.SUCCESS,
        'Product updated successfully',
      );
    } catch (error) {
      console.log(error);

      return new ResponseData<string>('', HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Delete('/:id')
  deleteProductById(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.productService.deleteProductById(),
        HttpStatus.SUCCESS,
        'Product deleted successfully',
      );
    } catch (error) {
      console.log(error);

      return new ResponseData<string>('', HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }
}
