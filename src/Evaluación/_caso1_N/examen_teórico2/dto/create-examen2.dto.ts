import { IsNotEmpty, IsString } from "class-validator";

export class Createexamen2Dto {
    @IsNotEmpty()
    id: string

    @IsNotEmpty()
    título: string

    @IsNotEmpty()
    número_preguntas: string

    @IsNotEmpty()
    fecha: string
  }
