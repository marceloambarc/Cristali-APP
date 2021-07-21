import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
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
    timestamp: Date;

    @Column()
    totalprice: string;

    @Column()
    notes: string;

    @Column()
    condition: number;

    @ManyToOne(() => Client, client => client.orders,{
        cascade: true,
    })
    @JoinColumn({ name: 'clientId' })
    client: Client;
    
    @OneToMany(() => Item, item => item.order,{
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'orderId' })
    items: Item[];

}