import { Module } from '@nestjs/common';
import { examen2Service } from './examen2.service';
import { examen2Controller } from './examen2.controller';
import { examen2 } from './entities/examen2.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([examen2],'base2')],
  controllers: [examen2Controller],
  providers: [examen2Service],
})
export class examen2Module {}
