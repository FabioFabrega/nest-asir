import { Injectable } from '@nestjs/common';
import { CreateprofesorDto } from './dto/create-profesor.dto';
import { UpdateprofesorDto } from './dto/update-profesor.dto';
import { profesor } from './entities/profesor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class profesorService {
  constructor(
    @InjectRepository(profesor,'base2')
    private readonly profesorRepository: Repository<profesor>,
  ) {}
  async create(id: number, nif: number, nombre:string, apellido1: string, apellido2: string, fecha: string): Promise<profesor> {
    const profesor = this.profesorRepository.create({ id, nif, nombre, apellido1, apellido2, fecha });
    return await this.profesorRepository.save(profesor);
  }
  async findAll(): Promise<profesor[]> {
    return await this.profesorRepository.find();
  }
  async findOne(id: number): Promise<profesor> {
    return await this.profesorRepository.findOne({ where: { id } });
  }
}
