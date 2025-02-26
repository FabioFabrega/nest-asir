import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class profesor2 {
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
}
