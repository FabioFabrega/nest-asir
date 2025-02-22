import { Injectable } from '@nestjs/common';
import { Createpractica2Dto } from './dto/create-practica2.dto';
import { Updatepractica2Dto } from './dto/update-practica2.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { practica2 } from './entities/practica2.entity';

@Injectable()
export class practica2Service {
  constructor(
    @InjectRepository(practica2,'base2')
    private readonly practica2Repository: Repository<practica2>,
  ) {}
  async crearpractica(id: number, título: string, dificultad: string, fecha: string): Promise<practica2> {
    const practica2 = this.practica2Repository.create({ id, título, dificultad, fecha});
    return await this.practica2Repository.save(practica2);
  }
  async obtenerTodos(): Promise<practica2[]> {
    return await this.practica2Repository.find();
  }
  async obtenerPorId(id: number): Promise<practica2> {
    return await this.practica2Repository.findOne({ where: { id } });
  }
}