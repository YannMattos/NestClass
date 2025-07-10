import { Injectable } from "@nestjs/common";
import { ProductEntity } from "./produto.entity";


@Injectable()
export class ProductRepository{
    private products: ProductEntity[] = [];

    private searchForId(id: string){
        const verifyProduct = this.products.find(
            (producSaved) => producSaved.id === id
        )

        if(!verifyProduct){
            throw new Error("O produto não existe")
        }

        return verifyProduct
    }

    async create (product: ProductEntity){
        this.products.push(product)
    }

    async list (){
        return this.products
    }

    async listProduct(id: string){
        const product = await this.searchForId(id)

        return product
    }

    async update (id: string, newProductData: Partial<ProductEntity>){

        const product = this.searchForId(id);

        Object.entries(newProductData).forEach(([key, atribuition]) => {
            if(key === 'id'){
                return
            }

            product[key] = atribuition

            return product
        })
    }

    async delete(id: string){

        const product = this.searchForId(id)

        this.products = this.products.filter(
            productSaved => productSaved.id !== id
        )

        return product
    }
}