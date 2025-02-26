import { PartialType } from '@nestjs/mapped-types';
import { Createprofesor2Dto } from './create-profesor2.dto';

export class Updateprofesor2Dto extends PartialType(Createprofesor2Dto) {}
