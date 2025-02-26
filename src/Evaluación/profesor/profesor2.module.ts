import { Module } from '@nestjs/common';
import { profesor2Service } from './profesor2.service';
import { profesor2Controller } from './profesor2.controller';
import { profesor2} from './entities/profesor2.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([profesor2],'base2')],
  controllers: [profesor2Controller],
  providers: [profesor2Service],
})
export class profesor2Module {}
