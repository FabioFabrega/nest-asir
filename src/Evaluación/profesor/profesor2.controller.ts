import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { profesor2Service } from './profesor2.service';
import { Createprofesor2Dto } from './dto/create-profesor2.dto';
import { Updateprofesor2Dto } from './dto/update-profesor2.dto';

@Controller('profesor')
export class profesor2Controller {
  constructor(private readonly profesor2Service: profesor2Service) {}

  @Post()
  async create(
    @Body() body: { id: number; nif: number; nombre: string, apellido1: string, apellido2: string }
  ) {
    return await this.profesor2Service.create
    (body.id, body.nif, body.nombre, body.apellido1, body.apellido2 );
  }

  @Get()
  findAll() {
    return this.profesor2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profesor2Service.findOne(+id);
  }

}
