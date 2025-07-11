import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/produto/entities/product.entity';
import { Repository } from 'typeorm';
import { listProducts } from './dto/product_list.dto';
import { CreateProduct } from './dto/create_product.dto';
import { UpdateProduct } from './dto/update_product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async createProduct(productDTO: CreateProduct) {
    const product = this.productRepository.create({
        user_id: productDTO.user_id,
        name: productDTO.name,
        quantity: productDTO.quantity,
        price: productDTO.price,
        image: productDTO.image,
        details: productDTO.details
    })

    return await this.productRepository.save(product);
  }

  async listProducts() {
    const products = await this.productRepository.find();

    const productsList = products.map((productItem) => {
      const productInsp = new listProducts();
      productInsp.name = productItem.name;
      productInsp.id = productItem.id;
      productInsp.price = productItem.price;
      productInsp.quantity = productItem.quantity;
      return productInsp;
    });

    console.log(`Consultando todos os produtos, ao todo foram consultados: ${productsList.length}`)
    return productsList;
  }
  
  async updateProduct(id: string, newProductData: UpdateProduct){
    const product = await this.productRepository.update(
        id, 
        newProductData
    )

    console.log(`Atualizando o produto: ${product}`)
    return product
  }

  async deleteProduct(id: string){
    const product = await this.productRepository.delete(id)

    return product
  }
}
