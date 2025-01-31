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

  findAll() {
    return `This action returns all pokemon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemon`;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
