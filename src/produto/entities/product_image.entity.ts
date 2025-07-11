import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('product_image')
export class ProductImage {
  @PrimaryColumn({ name: 'image_url', nullable: false })
  url: string;

  @Column({ name: 'image_description', length: 150, nullable: false })
  description: string;
}
