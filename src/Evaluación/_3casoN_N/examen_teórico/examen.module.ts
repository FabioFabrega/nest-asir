import { Module } from '@nestjs/common';
import { examenService } from './examen.service';
import { examenController } from './examen.controller';
import { examen } from './entities/examen.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([examen],'base2')],
  controllers: [examenController],
  providers: [examenService],
})
export class examenModule {}
