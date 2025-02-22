import { Type } from "class-transformer"
import { IsNotEmpty } from "class-validator"

export class Createpractica2Dto {
    @IsNotEmpty()
    id: number
  
    @IsNotEmpty()
    título: string
    
    @IsNotEmpty()
    dificultad: string

    @IsNotEmpty()
    fecha: string
    
  }
