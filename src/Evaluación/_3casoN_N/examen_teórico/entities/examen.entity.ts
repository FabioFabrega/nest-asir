import { alumno2 } from "../../alumno_hace_examen_teórico/entities/alumno2.entity"
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class examen {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  título: string

  @Column()
  número_preguntas: number

  @Column()
  fecha: string

  @Column()
  nota: number
}
