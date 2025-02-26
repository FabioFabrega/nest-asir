import { PartialType } from '@nestjs/mapped-types';
import { CreatepracticaDto } from './create-practica.dto';

export class UpdatepracticaDto extends PartialType(CreatepracticaDto) {}
