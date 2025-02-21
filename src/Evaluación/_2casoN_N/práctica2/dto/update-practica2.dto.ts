import { PartialType } from '@nestjs/mapped-types';
import { Createpractica2Dto } from './create-practica2.dto';

export class Updatepractica2Dto extends PartialType(Createpractica2Dto) {}
