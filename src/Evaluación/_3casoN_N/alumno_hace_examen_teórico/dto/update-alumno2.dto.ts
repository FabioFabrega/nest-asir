import { PartialType } from '@nestjs/mapped-types';
import { alumno2Dto } from './create-alumno2.dto';

export class Updatealumno2Dto extends PartialType(alumno2Dto) {}
