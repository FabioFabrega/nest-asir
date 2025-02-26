import { Injectable } from '@nestjs/common';
import { alumno2Dto } from './dto/create-alumno2.dto';
import { Updatealumno2Dto } from './dto/update-alumno2.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { alumno2 } from './entities/alumno2.entity';

@Injectable()
export class alumno2Service {
  constructor(
    @InjectRepository(alumno2,'base2')
    private readonly alumno2Repository: Repository<alumno2>,
  ) {}

  async crearalumno(id: number, nif: number, nombre:string, apellido1: string, apellido2: string, nota: number ): Promise<alumno2> {
    const alumno2 = this.alumno2Repository.create({ id, nif, nombre, apellido1, apellido2, nota });
    return await this.alumno2Repository.save(alumno2);
  }

  async obteneralumno(id: number): Promise<alumno2> {
      return await this.alumno2Repository.findOne({ where: { id } });
    }
}
