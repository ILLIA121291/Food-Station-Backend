import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ExtraIngredient } from './extraIngredient.schema';
import { Model } from 'mongoose';

@Injectable()
export class ExtraIngredientsService {
  // Подключение базы данных к данному сервису;
  constructor(
    @InjectModel(ExtraIngredient.name)
    private extraIngredientModel: Model<ExtraIngredient>,
  ) {}

  // GET ALL EXTRA INGREDIENTS FROM DATABASE ------

  async getAllExtraIngredients() {
    return await this.extraIngredientModel.find({}, {_id:1, dishType:1, listExtraIngredients:1, });
  }
}
