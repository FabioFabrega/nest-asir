import { IsNotEmpty, IsString } from "class-validator";

export class CreateexamenDto {
    @IsNotEmpty()
    id: string

    @IsNotEmpty()
    título: string

    @IsNotEmpty()
    número_preguntas: string

    @IsNotEmpty()
    fecha: string
    
    @IsNotEmpty()
    nota: string
  }
