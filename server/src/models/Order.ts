import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import Item from "./Item";
import Client from "./Client";

@Entity()
export default class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    token: string;

    @Column()
    code: string;

    @Column()
    timestamp: string;

    @Column()
    totalprice: string;

    @Column()
    notes: string;

    @Column()
    conditon: number;

    @ManyToOne(() => Client, client => client.orders)
    client: Client;

    @OneToMany(() => Item, item => item.order)
    items: Item[];

}