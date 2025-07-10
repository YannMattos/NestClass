import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('product_details')
export class ProductDetails{
    @PrimaryColumn({name: "title_detail", length: 100, nullable: false})
    title: string

    @Column({name: "product_description", length: 100, nullable: false})
    description: string
}