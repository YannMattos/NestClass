import { IsNotEmpty, IsString } from "class-validator";

export class ProductDetails {

    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    description: string
}