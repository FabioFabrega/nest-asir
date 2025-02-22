import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import {examen2Service } from './examen2.service';
import { Createexamen2Dto } from './dto/create-examen2.dto';
import { Updateexamen2Dto } from './dto/update-examen2.dto';

@Controller('examen')
export class examen2Controller {
  constructor(private readonly examen2Service: examen2Service) {}

  @Post()
  create(@Body() id:number, título: string, número_preguntas: number, fecha: string) {
    return this.examen2Service.create(id, título, número_preguntas, fecha);
  }

  @Get()
  findAll() {
    return this.examen2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examen2Service.findOne(+id);
  }
}
