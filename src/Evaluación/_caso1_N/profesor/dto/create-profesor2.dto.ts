import { IsNotEmpty, IsString } from "class-validator";

export class Createprofesor2Dto {
  @IsNotEmpty()
  id: number

  @IsNotEmpty()
  nif: number
  
  @IsNotEmpty()
  grupo: string

  @IsNotEmpty()
  nombre: string

  @IsNotEmpty()
  apellido1: string

  @IsNotEmpty()
  apellido2: string

  }
