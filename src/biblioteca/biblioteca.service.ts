import { Injectable } from '@nestjs/common';
import { CreateBibliotecaDto } from './dto/create-biblioteca.dto';
import { UpdateBibliotecaDto } from './dto/update-biblioteca.dto';
import { Biblioteca } from './entities/biblioteca.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BibliotecaService {
  create(createBibliotecaDto: CreateBibliotecaDto) {
    return 'This action adds a new biblioteca';
  }

  async findAll():Promise<Biblioteca[]> {
    return this.BibliotecaRepository.find();
  }

 async findOne(id: number) {
    return this.BibliotecaRepository.findOne(where=id);
  }

  update(id: number, updateBibliotecaDto: UpdateBibliotecaDto) {
    return `This action updates a #${id} biblioteca`;
  }

  async remove(id: number):Promise<string> {
    await this.bibliotecaRepository.remove(id);
    return "Elemento de la base de datos eliminado";
  }
}
