import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumno } from './entities/alumnos.entity';
@Injectable()
export class AlumnosService {
 constructor(
 @InjectRepository(Alumno)
 private alumnoRepository: Repository<Alumno>,
 ) {}
}