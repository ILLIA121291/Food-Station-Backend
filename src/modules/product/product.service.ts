import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { Model } from 'mongoose';
import { ExtraIngredient } from '../extraIngredient/extraIngredient.schema';

@Injectable()
export class ProductService {
  // Подключение базы данных к данному сервису;
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    @InjectModel(ExtraIngredient.name)
    private extraIngredientModel: Model<ExtraIngredient>,
  ) {}

  // GET ALL PRODUCTS FOR DATA BASE -----------------------------
  async getAllProducts() {
    // Get all Products;
    const allProducts: any[] = await this.productModel.find(
      {},
      {
        _id: 1,
        basis: 1,
        dishType: 1,
        extraIngredients: 1,
        img: 1,
        ingredients: 1,
        isPopular: 1,
        name: 1,
        size: 1,
        tags: 1,
      },
    );

    // Get all ExtraIngredients;
    const allExtraIngredients = await this.extraIngredientModel.find();

    // Add ExtraIngredients at Product;
    for (let i = 0; i < allExtraIngredients.length; i++) {
      for (let y = 0; y < allProducts.length; y++) {
        if (allExtraIngredients[i].dishType == allProducts[y].dishType) {
          allProducts[y]._doc.extraIngredients =
            allExtraIngredients[i].listExtraIngredients;
        }
      }
    }

    // Sending all Products to client;
    return allProducts;
  }
}
