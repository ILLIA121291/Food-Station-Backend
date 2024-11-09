import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExtraIngredientDocument = HydratedDocument<ExtraIngredient>;

@Schema()
export class ExtraIngredient {
  @Prop()
  dishType: string;

  @Prop()
  listExtraIngredients: { name: string; price: number }[];

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  creatorId: string;
}

export const ExtraIngredientSchema =
  SchemaFactory.createForClass(ExtraIngredient);
