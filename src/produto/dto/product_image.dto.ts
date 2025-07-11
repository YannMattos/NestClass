import { IsNotEmpty, IsString } from "class-validator";
import { Column } from "typeorm";



export class ProductImage {

    @IsString()
    @IsNotEmpty()
    url: string

    @IsString()
    @IsNotEmpty()
    description: string
}