import { IsNotEmpty, IsOptional, MinLength, IsNumber, IsString } from "class-validator"


export class CreateProduct {

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name: string

    @IsOptional()
    @IsString()
    description: string

    @IsNotEmpty()
    @IsNumber()
    quantity: number

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    price: string
}