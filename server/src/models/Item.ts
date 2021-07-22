import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Order from "./Order";

@Entity()
export default class Item {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar", { length: 100 })
  itemname: string;

  @Column()
  price: string;

  @Column()
  quantity: number;

  @ManyToOne(() => Order, order => order.items)
  @JoinColumn({ name: 'orderId' })
  order: Order;

}