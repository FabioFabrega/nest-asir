import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Biblioteca {
@PrimaryGeneratedColumn() // Genera un id autoincremental, si sólo fuera clave sería @PrimaryColumn()
  id: number;
@Column({ type: 'varchar', length: 50 })
    titulo: string;
    @Column({ type: 'varchar', length: 50 })
    autor: string;
    @Column({ type: 'varchar', length: 50 })
    tema: string;
    @Column({ type: 'varchar', length: 50 })
    editorial: string;
    @Column({ type: 'varchar', length: 50 })
    stock: string;
    @Column({ type: 'varchar', length: 50 })
    precio: string;   
}