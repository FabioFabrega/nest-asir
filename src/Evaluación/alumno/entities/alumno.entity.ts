import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm"
import { examen } from "../../examen_teórico/entities/examen.entity"

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
}
