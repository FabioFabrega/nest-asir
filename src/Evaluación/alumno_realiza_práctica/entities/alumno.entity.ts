import { practica } from "../../práctica/entities/practica.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm"

@Entity()
export class alumno {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nif: number

  @Column()
  grupo: string

  @Column()
  nombre: string

  @Column()
  apellido1: string

  @Column()
  apellido2: string
  
  @Column()
  fecha: string
  
  @Column()
  nota: number
  
  @ManyToOne(() => alumno)
  @JoinColumn({ name: 'id_alumno' })
  alumno: alumno;

  @ManyToOne(() => practica)
  @JoinColumn({ name: 'id_practica' })
  practica: practica;
}
