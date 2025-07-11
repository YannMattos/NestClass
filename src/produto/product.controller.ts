import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateProduct } from "./dto/create_product.dto";
import { ProductEntity } from "./entities/product.entity";
import { ProductRepository } from "./product.repository";
import { listProducts } from "./dto/product_list.dto";
import { UpdateProduct } from "./dto/update_product.dto";


@Controller('produtos')
export class ProductsController {

    constructor (
        private productRepository : ProductRepository
    ){}

    @Post()
    async createProduct (@Body() productsData: CreateProduct){

        const newProduct = new ProductEntity();
        newProduct.name = productsData.name;
        newProduct.details = productsData.details;
        newProduct.quantity = productsData.quantity;
        newProduct.price = productsData.price;
        newProduct.image = productsData.image;

        this.productRepository.create(newProduct)
        return{
            produto: productsData,
            message: "Produto criado com sucesso! "
        }
    }

    @Get()
    async productsList () {
        const products = await this.productRepository.list();

        const productsList = products.map(productItem => {
            const productInsp = new listProducts();
            productInsp.name = productItem.name;
            return productInsp;
        });

        return productsList;
    }

    @Get('/:id')
    async listProduct(@Param('id') id: string){
        const product = await this.productRepository.listProduct(id)

        return product
    }


    @Put('/:id')
    async updateProduct(@Param('id') id: string, @Body() newProductData: UpdateProduct){
        const updateProduct = await this.productRepository.update(
            id,
            newProductData
        )

        return{
            product: updateProduct,
            message: "Produto atualizado com sucesso"
        }
    }

    @Delete('/:id')
        async deleteProduct (@Param('id') id: string){
            await this.productRepository.delete(id);

            return{
                message: "Produto deletado com sucesso"
            }
        }
    
}