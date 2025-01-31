import { Min } from "class-validator";
export class CreatePokemonDto {
    @Min(1,{message:"El valor de id tiene que ser positivo y mayor que cero"})
    id: number;
    Nombre: string;
    Tipo: string;
    @Min(0,{message:"El valor de Hp tiene que ser positivo"})
    Hp: number;
    @Min(0,{message:"El valor de Ataque tiene que ser positivo"})
    Ataque: number;
    @Min(0,{message:"El valor de Defensa tiene que ser positivo"})
    Defensa: number;
    @Min(0,{message:"El valor de Ataque_esp tiene que ser positivo"})
    Ataque_esp: number;
    @Min(0,{message:"El valor de Defensa_esp tiene que ser positivo"})
    Defensa_esp: number;
    @Min(0,{message:"El valor de Velocidad tiene que ser positivo"})
    Velocidad: number;
}

