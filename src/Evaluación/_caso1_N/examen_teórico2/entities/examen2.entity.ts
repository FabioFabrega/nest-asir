
import { profesor } from "src/Evaluación/_2casoN_N/profesor_diseña_práctica/entities/profesor.entity"
import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class examen2 {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  título: string

  @Column()
  número_preguntas: number

  @Column()
  fecha: string
  
  @ManyToOne(() => profesor)
  @JoinColumn({ name: 'id_profesor' })
  profesor: profesor;

}
