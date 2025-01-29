
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn() // Genera un id autoincremental, si sólo fuera clave sería @PrimaryColumn()
  id: number;
  @Column({ type: 'varchar', length: 50 })
    Nombre: string;
  @Column()
    Tipo: string;
  @Column()
    Hp: number;
  @Column()
    Ataque: number;
  @Column()
    Defensa: number;
  @Column()
    Ataque_esp: number;
  @Column()
    Defensa_esp: number;
  @Column()
    Velocidad: number;
}