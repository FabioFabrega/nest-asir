import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm"
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
  
  @ManyToOne(() => alumno2)
  @JoinColumn({ name: 'id_alumno' })
  alumno: alumno2;

  @ManyToOne(() => examen)
  @JoinColumn({ name: 'id_examen_teórico' })
  examen: examen;
}
