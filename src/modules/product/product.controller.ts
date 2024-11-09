import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

//@Controller('products') - данный контролер будет срабатывать при запросах https://localhost:300/products;
@Controller('products')
export class ProductController {
  constructor(
    // Подключение ProductService;
    private readonly productService: ProductService,
  ) {}

  // GET ALL PRODUCTS -------------------------------------------
  @Get('')
  async getAllProducts() {

    return await this.productService.getAllProducts();
  }
}
