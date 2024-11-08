import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  // Подключение базы данных к данному сервису;
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  // GET ALL PRODUCTS -----------------------------
  async getAllProducts() {
    return await this.productModel.find()
  }

  // Получение одного типа блюд -------------------------------------
  async getProductList(dishType: string): Promise<Product[]> {
    // Данное действие получает из базы документы с одиннаковым dishType;
    return await this.productModel.find({ dishType });
  }


}
