import { Controller, Get } from "@nestjs/common";
import { ProductService } from "./product.service";

//@Controller('products') - данный контролер будет срабатывать при запросах https://localhost:300/products;
@Controller('products')

export class ProductController {
  constructor(
    // Подключение ProductService;
    private readonly productService: ProductService 
  ){}

  // Get запрос на url https://localhost:300/products;
  @Get()
  findAll (): any {
    return this.productService.findAll()
  }

}
