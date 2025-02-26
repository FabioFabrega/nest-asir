import { Module } from '@nestjs/common';
import { alumnoService } from './alumno.service';
import { alumnoController } from './alumno.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { alumno } from './entities/alumno.entity';

@Module({
  imports:[TypeOrmModule.forFeature([alumno],'base2')],
  controllers: [alumnoController],
  providers: [alumnoService],
})
export class alumno2Module {}
