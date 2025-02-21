import { Module } from '@nestjs/common';
import { practicaService } from './practica.service';
import { practicaController } from './practica.controller';
import { practica } from './entities/practica.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([practica],'base2')],
  controllers: [practicaController],
  providers: [practicaService],
})
export class practicaModule {}
