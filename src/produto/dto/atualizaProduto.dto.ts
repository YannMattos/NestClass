import {
  IsNotEmpty,
  IsOptional,
  MinLength,
  IsNumber,
  IsString,
} from 'class-validator';

export class UpdateProduct {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsOptional()
  @IsNumber()
  quantity: number;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(2)
  price: string;
}
