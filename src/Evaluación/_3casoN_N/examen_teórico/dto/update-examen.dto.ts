import { PartialType } from '@nestjs/mapped-types';
import { CreateexamenDto } from './create-examen.dto';

export class UpdateexamenDto extends PartialType(CreateexamenDto) {}
