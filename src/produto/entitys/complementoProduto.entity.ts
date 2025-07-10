import { Column, Entity } from "typeorm";

@Entity('product_details')
export class ProductDetails{
    @Column({name: "title_detail", length: 100, nullable: false})
    title: string

    @Column({name: "product_description", length: 100, nullable: false})
    description: string
}