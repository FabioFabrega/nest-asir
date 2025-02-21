import { Injectable } from '@nestjs/common';
import { CreatepracticaDto } from './dto/create-practica.dto';
import { UpdatepracticaDto } from './dto/update-practica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { practica } from './entities/practica.entity';

@Injectable()
export class practicaService {
  constructor(
    @InjectRepository(practica,'base2')
    private readonly practicaRepository: Repository<practica>,
  ) {}
  async crearpractica(id: number, título: string, dificultad: string, fecha: string, nota: number): Promise<practica> {
    const practica = this.practicaRepository.create({ id, título, dificultad, fecha, nota });
    return await this.practicaRepository.save(practica);
  }
  async obtenerTodos(): Promise<practica[]> {
    return await this.practicaRepository.find();
  }
  async obtenerPorId(id: number): Promise<practica> {
    return await this.practicaRepository.findOne({ where: { id } });
  }
}