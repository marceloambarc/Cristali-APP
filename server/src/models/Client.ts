import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import Order from "./Order";

@Entity()
export default class Client {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("nvarchar", { length: 100 })
  nomefinalcli: string;

  @Column("nvarchar", { length: 14 })
  phone: string;

  @Column("nvarchar", { length: 100 })
  email: string;

  @Column("nvarchar", { length: 200 })
  notes: string;

  @Column()
  orderId: number;

}