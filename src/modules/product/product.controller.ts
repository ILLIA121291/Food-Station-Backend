import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

//@Controller('products') - данный контролер будет срабатывать при запросах https://localhost:300/products;
@Controller('menu')
export class ProductController {
  constructor(
    // Подключение ProductService;
    private readonly productService: ProductService,
  ) {}

  // ПОЛУЧЕНИЕ СПИСКА ОДНОГО ТИПА БЛЮД-------------------------------
  @Get(':slug')
  async getProductList(@Param() param: { slug: string }) {
    // Получение названия типа блюда из входящего запроса;
    const dishType = param.slug.replace('_list', '');

    // Запрос к сервису для получения документов с данным типом блюда;
    return await this.productService.getProductList(dishType);
  }
}
