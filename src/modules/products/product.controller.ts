import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';

@Controller('api/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/all')
  getProducts(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.productService.getProducts(),
        HttpStatus.SUCCESS,
        'Product list retrieved successfully',
      );
    } catch (error) {
      console.log(error);

      return new ResponseData<string>('', HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Post()
  createProduct(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.productService.createProduct(),
        HttpStatus.SUCCESS,
        'Product posted successfully',
      );
    } catch (error) {
      console.log(error);

      return new ResponseData<string>('', HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Get('/:id')
  getProductById(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.productService.getProductById(),
        HttpStatus.SUCCESS,
        'Product retrieved successfully',
      );
    } catch (error) {
      console.log(error);

      return new ResponseData<string>('', HttpStatus.ERROR, HttpMessage.ERROR);
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
