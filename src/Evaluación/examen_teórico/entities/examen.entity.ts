import { profesor2 } from "../../profesor/entities/profesor2.entity"
import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm"

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

  @ManyToOne(() => profesor2)
    @JoinColumn({ name: 'id_profesor' })
    profesor: profesor2;
}
