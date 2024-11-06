import {  Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {

  // Подключение базы данных к данному сервису;
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}


  // Получение из коллекции всех документов;
  async findAll(): Promise<Product> {

    const allProducts = await this.productModel.find()

    return allProducts[0]
  }

}



  // // FIND ALL PRODUCTS;
  // findAll(): string {
  //   return 'Find all products!!!';
  // }