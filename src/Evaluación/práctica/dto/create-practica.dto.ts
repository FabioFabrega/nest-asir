import { Type } from "class-transformer"
import { IsNotEmpty } from "class-validator"
import { alumnoDto } from "../../alumno_realiza_práctica/dto/create-alumno.dto"

export class CreatepracticaDto {
    @IsNotEmpty()
    id: number
  
    @IsNotEmpty()
    título: string
    
    @IsNotEmpty()
    dificultad: string
    
  }
