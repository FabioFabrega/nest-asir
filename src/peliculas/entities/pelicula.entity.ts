import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Pelicula {
    @PrimaryGeneratedColumn()
      id: number;
      @Column({ type: 'varchar', length: 50 })
        titulo: string;
      @Column({ type: 'varchar', length: 50 })
        director: string;
      @Column()
        año: number;
      @Column()
        duracion: number;
}
