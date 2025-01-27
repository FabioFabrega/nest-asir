import { Module } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { AlumnosController } from './alumnos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './entities/alumnos.entity';

@Module({
  imports:[TypeOrmModule.forFeature ([Alumno], "base2")],
  controllers: [AlumnosController],
  providers: [AlumnosService],
})
export class AlumnosModule {}
