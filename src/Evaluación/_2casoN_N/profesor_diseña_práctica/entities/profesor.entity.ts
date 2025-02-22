import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm"
import { practica2 } from "../../práctica2/entities/practica2.entity"

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
  
  @ManyToOne(() => profesor)
  @JoinColumn({ name: 'id_profesor' })
  profesor: profesor;

  @ManyToOne(() => practica2)
  @JoinColumn({ name: 'id_practica' })
  practica: practica2;
}
