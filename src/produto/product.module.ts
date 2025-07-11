import { Module } from '@nestjs/common';
import { ProductsController } from './product.controller';
import { ProductRepository } from './product.repository';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductsController],
  providers: [ProductService, ProductRepository],
})
export class ProductModule {}
