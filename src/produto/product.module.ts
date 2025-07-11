import { Module } from "@nestjs/common";
import { ProductsController } from "./product.controller";
import { ProductRepository } from "./product.repository";



@Module({
    controllers: [
        ProductsController
    ],
    providers: [ProductRepository]
})

export class ProductModule{}