import { PartialType } from '@nestjs/mapped-types';
import { CreatePeliculaDto } from './create-pelicula.dto';
import { Min } from "class-validator";

export class UpdatePeliculaDto extends PartialType(CreatePeliculaDto) {
    @Min(0, { message: "El valor del id tiene que ser positivo" })
    id: number;
    titulo: string;
    director: string;
    año: number;
    @Min(0, { message: "El valor de la duración tiene que ser positivo" })
    duracion: number;
}
