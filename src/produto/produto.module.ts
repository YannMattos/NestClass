import { Module } from "@nestjs/common";
import { ProductsController } from "./produto.controller";
import { ProductRepository } from "./produto.repository";



@Module({
    controllers: [
        ProductsController
    ],
    providers: [ProductRepository]
})

export class ProductModule{}