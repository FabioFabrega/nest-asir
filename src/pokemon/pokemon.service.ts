import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from "./entities/pokemon.entity";
import { MoreThan, Repository } from 'typeorm';

@Injectable()
export class PokemonService {
  constructor(
  @InjectRepository(Pokemon,'base1')
        private PokemonRepository:Repository<Pokemon>
      ){}
  async create(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
      const Poke=this.PokemonRepository.create(createPokemonDto)
      return this.PokemonRepository.save(Poke)
    }


  findOne(id: number) {
    return `This action returns a #${id} pokemon`;
  }
  async findAll(Nombre?:string, ordenm?: string, tipo?: string): Promise<Pokemon[]>{
    let query = this.PokemonRepository.createQueryBuilder('pokemon')
    if (Nombre) {
      query = query.where('LOWER(pokemon.Nombre) LIKE LOWER(:nombre)', { nombre: `%${Nombre}%` });
    }

    // Filtrar por tipo
    if (tipo) {
      query = query.where('LOWER(pokemon.tipo) = LOWER(:tipo)', { tipo });
    }

    // Ordenar por HP (de mayor a menor)
    if (ordenm === 'hp') {
      query = query.orderBy('pokemon.Hp', 'DESC');
    }

    return query.getMany();
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
