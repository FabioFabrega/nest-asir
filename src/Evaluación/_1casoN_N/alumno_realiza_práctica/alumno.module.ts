import { Module } from '@nestjs/common';
import { alumnoService } from './alumno.service';
import { alumnoController } from './alumno.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { alumno } from './entities/alumno.entity';
import { practica } from '../práctica/entities/practica.entity';

@Module({
  imports:[TypeOrmModule.forFeature([alumno, practica],'base2')],
  controllers: [alumnoController],
  providers: [alumnoService],
})
export class alumnoModule {}
