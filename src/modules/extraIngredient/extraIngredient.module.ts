import { Module } from '@nestjs/common';
import { ExtraIngredientsController } from './extraIngredient.controller';
import { ExtraIngredientsService } from './extraIngredient.service';

import { MongooseModule } from '@nestjs/mongoose';
import {
  ExtraIngredient,
  ExtraIngredientSchema,
} from './extraIngredient.schema';

@Module({
  imports: [
    // Данная строкак делает подключение;
    MongooseModule.forFeature([
      { name: ExtraIngredient.name, schema: ExtraIngredientSchema },
    ]),
  ],
  controllers: [ExtraIngredientsController],
  providers: [ExtraIngredientsService],
})
export class ExtraIngredientsModule {}
