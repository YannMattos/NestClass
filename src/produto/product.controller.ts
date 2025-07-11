import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProduct } from './dto/create_product.dto';
import { ProductRepository } from './product.repository';
import { UpdateProduct } from './dto/update_product.dto';
import { ProductService } from './product.service';

@Controller('produtos')
export class ProductsController {
  constructor(
    private productRepository: ProductRepository,
    private productService: ProductService,
  ) {}

  @Post()
  async createProduct(@Body() productsData: CreateProduct) {
    const product = await this.productService.createProduct(productsData);

    return {
      produto: product,
      message: 'Produto criado com sucesso! ',
    };
  }

  @Get()
  async productsList() {
    const products = await this.productService.listProducts();

    return products;
  }

  @Get('/:id')
  async listProduct(@Param('id') id: string) {
    const product = await this.productRepository.listProduct(id);

    return product;
  }

  @Put('/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() newProductData: UpdateProduct,
  ) {
    const updateProduct = await this.productService.updateProduct(
      id,
      newProductData,
    );

    return {
      product: updateProduct,
      message: 'Produto atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string) {
    await this.productService.deleteProduct(id);

    return {
      message: 'Produto deletado com sucesso',
    };
  }
}
