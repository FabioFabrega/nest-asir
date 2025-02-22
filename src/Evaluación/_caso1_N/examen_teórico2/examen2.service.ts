import { Injectable } from '@nestjs/common';
import { Createexamen2Dto } from './dto/create-examen2.dto';
import { Updateexamen2Dto } from './dto/update-examen2.dto';
import { examen2 } from './entities/examen2.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class examen2Service {
  constructor(
    @InjectRepository(examen2,'base2')
    private readonly examenRepository: Repository<examen2>,
  ) {}
  async create(id:number, título: string, número_preguntas: number, fecha: string): Promise<examen2> {
    const examen2 = this.examenRepository.create({ id, título, número_preguntas, fecha});
    return await this.examenRepository.save(examen2);
  }
  async findAll(): Promise<examen2[]> {
    return await this.examenRepository.find();
  }
  async findOne(id: number): Promise<examen2> {
    return await this.examenRepository.findOne({ where: { id } });
  }
}
