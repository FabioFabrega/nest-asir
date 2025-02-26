import { PartialType } from '@nestjs/mapped-types';
import { alumnoDto } from './create-alumno.dto';

export class UpdatealumnoDto extends PartialType(alumnoDto) {}
