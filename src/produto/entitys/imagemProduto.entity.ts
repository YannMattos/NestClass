import { IsNotEmpty, IsString } from "class-validator";
import { Column, Entity } from "typeorm";


@Entity('product_image')
export class ProductImage {

    @Column({name: 'image_url', nullable: false})
    url: string

    @Column({name: 'image_description', length: 150, nullable: false})
    description: string
}