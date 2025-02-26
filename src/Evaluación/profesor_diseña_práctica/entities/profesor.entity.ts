import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm"
import { practica } from "../../práctica/entities/practica.entity"
import { profesor2 } from "src/Evaluación/profesor/entities/profesor2.entity"

@Entity()
export class profesor {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nif: number

  @Column()
  nombre: string

  @Column()
  apellido1: string

  @Column()
  apellido2: string
  
  @Column()
  fecha: string
  
  @ManyToOne(() => profesor2)
  @JoinColumn({ name: 'id_profesor' })
  profesor: profesor2;

  @ManyToOne(() => practica)
  @JoinColumn({ name: 'id_practica' })
  practica: practica;
}
