import {
  IsNotEmpty,
  IsOptional,
  MinLength,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ProductImage } from './product_image.dto';
import { ProductDetails } from './product_complement.dto';
import { Type } from 'class-transformer';

export class CreateProduct {
  id: number;

  @IsNotEmpty()
  user_id: string

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => ProductDetails)
  details: ProductDetails;

  @Type(() => Number)
  @IsNumber()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  price: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProductImage)
  image: ProductImage;
}
