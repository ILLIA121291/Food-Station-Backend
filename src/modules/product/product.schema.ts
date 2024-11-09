import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  img: string;

  @Prop()
  size: object[];

  @Prop()
  ingredients: string[];

  @Prop()
  isPopular: boolean;

  @Prop()
  dishType: string;

  @Prop()
  tags: string[];

  @Prop()
  basis: object[];

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  creatorId: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);