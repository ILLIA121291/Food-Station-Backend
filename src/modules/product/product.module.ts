import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

// Необходимый импорт; 
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.schema';
import { ExtraIngredient, ExtraIngredientSchema } from '../extraIngredient/extraIngredient.schema';

@Module({
  imports: [
    // Данная строкак делает подключение; 
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }, { name: ExtraIngredient.name, schema: ExtraIngredientSchema } ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
