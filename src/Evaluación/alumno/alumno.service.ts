import { Injectable } from '@nestjs/common';
import { alumnoDto } from './dto/create-alumno.dto';
import { UpdatealumnoDto } from './dto/update-alumno.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { alumno } from './entities/alumno.entity';

@Injectable()
export class alumnoService {
  constructor(
    @InjectRepository(alumno,'base2')
    private readonly alumnoRepository: Repository<alumno>,
  ) {}

  async crearalumno(id: number, nif: number, nombre:string, apellido1: string, apellido2: string ): Promise<alumno> {
    const alumno = this.alumnoRepository.create({ id, nif, nombre, apellido1, apellido2 });
    return await this.alumnoRepository.save(alumno);
  }

  async obteneralumno(id: number): Promise<alumno> {
      return await this.alumnoRepository.findOne({ where: { id } });
    }
}
