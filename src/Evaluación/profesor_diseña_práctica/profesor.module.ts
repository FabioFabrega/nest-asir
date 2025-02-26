import { Module } from '@nestjs/common';
import { profesorService } from './profesor.service';
import { profesorController } from './profesor.controller';
import { profesor} from './entities/profesor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([profesor],'base2')],
  controllers: [profesorController],
  providers: [profesorService],
})
export class profesorModule {}
