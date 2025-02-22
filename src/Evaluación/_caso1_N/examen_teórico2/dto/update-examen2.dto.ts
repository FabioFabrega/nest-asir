import { PartialType } from '@nestjs/mapped-types';
import { Createexamen2Dto } from './create-examen2.dto';

export class Updateexamen2Dto extends PartialType(Createexamen2Dto) {}
