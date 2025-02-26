import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import {examenService } from './examen.service';
import { CreateexamenDto } from './dto/create-examen.dto';
import { UpdateexamenDto } from './dto/update-examen.dto';

@Controller('examen')
export class examenController {
  constructor(private readonly examenService: examenService) {}

  @Post()
  create(@Body() id:number, título: string, número_preguntas: number, fecha: string, nota: number) {
    return this.examenService.create(id, título, número_preguntas, fecha, nota);
  }

  @Get()
  findAll() {
    return this.examenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examenService.findOne(+id);
  }
}
