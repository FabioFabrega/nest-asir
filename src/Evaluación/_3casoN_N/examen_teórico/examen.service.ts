import { Injectable } from '@nestjs/common';
import { CreateexamenDto } from './dto/create-examen.dto';
import { UpdateexamenDto } from './dto/update-examen.dto';
import { examen } from './entities/examen.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class examenService {
  constructor(
    @InjectRepository(examen,'base2')
    private readonly examenRepository: Repository<examen>,
  ) {}
  async create(id:number, título: string, número_preguntas: number, fecha: string, nota: number): Promise<examen> {
    const examen = this.examenRepository.create({ id, título, número_preguntas, fecha, nota });
    return await this.examenRepository.save(examen);
  }
  async findAll(): Promise<examen[]> {
    return await this.examenRepository.find();
  }
  async findOne(id: number): Promise<examen> {
    return await this.examenRepository.findOne({ where: { id } });
  }
}
