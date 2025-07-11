import { IsNotEmpty, IsString } from "class-validator";
import { Column } from "typeorm";



export class ProductDetails {

    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    description: string
}