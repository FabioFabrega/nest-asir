import { alumno } from "../../alumno_realiza_práctica/entities/alumno.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class practica {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  título: string

  @Column()
  dificultad: string

}
