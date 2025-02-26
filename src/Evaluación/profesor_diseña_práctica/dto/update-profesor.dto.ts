import { PartialType } from '@nestjs/mapped-types';
import { CreateprofesorDto } from './create-profesor.dto';

export class UpdateprofesorDto extends PartialType(CreateprofesorDto) {}
