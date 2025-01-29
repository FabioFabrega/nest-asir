import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {
    id: number;
    Nombre: string;
    Tipo: string;
    Hp: number;
    Ataque: number;
    Defensa: number;
    Ataque_esp: number;
    Defensa_esp: number;
    Velocidad: number;
}
