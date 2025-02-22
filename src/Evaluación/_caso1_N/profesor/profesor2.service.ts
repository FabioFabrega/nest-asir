import { Injectable } from '@nestjs/common';
import { Createprofesor2Dto } from './dto/create-profesor2.dto';
import { Updateprofesor2Dto } from './dto/update-profesor2.dto';
import { profesor2 } from './entities/profesor2.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class profesor2Service {
  constructor(
    @InjectRepository(profesor2,'base2')
    private readonly profesorRepository: Repository<profesor2>,
  ) {}
  async create(id: number, nif: number, nombre:string, apellido1: string, apellido2: string): Promise<profesor2> {
    const profesor2 = this.profesorRepository.create({ id, nif, nombre, apellido1, apellido2 });
    return await this.profesorRepository.save(profesor2);
  }
  async findAll(): Promise<profesor2[]> {
    return await this.profesorRepository.find();
  }
  async findOne(id: number): Promise<profesor2> {
    return await this.profesorRepository.findOne({ where: { id } });
  }
}
