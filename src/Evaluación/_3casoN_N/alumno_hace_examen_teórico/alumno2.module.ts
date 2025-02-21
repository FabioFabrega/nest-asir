import { Module } from '@nestjs/common';
import { alumno2Service } from './alumno2.service';
import { alumno2Controller } from './alumno2.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { alumno2 } from './entities/alumno2.entity';

@Module({
  imports:[TypeOrmModule.forFeature([alumno2],'base2')],
  controllers: [alumno2Controller],
  providers: [alumno2Service],
})
export class alumnoModule {}
