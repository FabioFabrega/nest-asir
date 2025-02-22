import { Module } from '@nestjs/common';
import { practica2Service } from './practica2.service';
import { practica2Controller } from './practica2.controller';
import { practica2 } from './entities/practica2.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([practica2],'base2')],
  controllers: [practica2Controller],
  providers: [practica2Service],
})
export class practica2Module {}
