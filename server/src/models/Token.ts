import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Token {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    token: string;

    @Column()
    createAt: Date;

    @Column()
    updateAt: Date;
}