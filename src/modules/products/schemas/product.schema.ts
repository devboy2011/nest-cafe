import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ unique: true })
  product_id: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ default: true })
  isAvailable: boolean;

  @Prop()
  category: string;

  @Prop()
  imageUrl: string;

  @Prop({ type: [{ size: String, price: Number }] })
  sizeOptions: { size: string; price: number }[];

  @Prop({ type: [String] })
  toppings: string[];

  @Prop({ default: 0 })
  discount: number;

  @Prop()
  unit: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
