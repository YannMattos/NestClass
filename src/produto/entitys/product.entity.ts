import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { ProductDetails } from '../dto/product_complement.dto';
import { ProductImage } from '../dto/product_image.dto';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', nullable: false })
  user_id: number;

  @Column({ name: 'product_name', length: 150, nullable: false })
  name: string;

  @Column({ name: 'product_details', type: 'json', nullable: true })
  details: ProductDetails;

  @Column({ name: 'quantity', type: 'int', nullable: false })
  quantity: number;

  @Column({ name: 'product_price', length: 200, nullable: false })
  price: string;

  @Column({ name: 'product_image', type: 'json', nullable: false })
  image: ProductImage;

  @CreateDateColumn({ name: 'created_at' })
  created_at: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at: string;
}
