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

  // GET ALL PRODUCTS FOR DATA BASE -----------------------------
  async getAllProducts() {
    return await this.productModel.find({}, {_id:1, basis: 1, dishType: 1, extraIngredients: 1, img: 1, ingredients:1, isPopular:1, name: 1, size: 1, tags: 1})
  }
}
