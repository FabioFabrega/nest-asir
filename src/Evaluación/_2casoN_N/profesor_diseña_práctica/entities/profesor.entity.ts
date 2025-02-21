import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
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
  
 @OneToMany(
     () => practica2,
     (practica2) => practica2.profesor,
   ) 
   practica2: practica2[]
}
