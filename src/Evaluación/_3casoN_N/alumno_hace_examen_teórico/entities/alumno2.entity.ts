import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { examen } from "../../examen_teórico/entities/examen.entity"

@Entity()
export class alumno2 {
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
  nota: number
  
  @ManyToOne(
    () => examen,
    (examen) => examen.alumno2,
  )
  examen: examen[]
}
