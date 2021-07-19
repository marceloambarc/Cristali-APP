import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Acesso {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ativo: number;

    @Column()
    senha: string;

    @Column("nvarchar", { length: 6 })
    ccli: string;

    @Column("nvarchar", { length: 100 })
    nomecli: string;

    @Column("nvarchar", { length: 14 })
    cgce: string;
}