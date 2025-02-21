import { profesor } from "../../profesor_diseña_práctica/entities/profesor.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class practica2 {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  título: string

  @Column()
  dificultad: string

  @Column()
  fecha: Date


  @OneToMany(
    () => profesor,
    (profesor) => profesor.practica2,
  )
  profesor: profesor[]
}
