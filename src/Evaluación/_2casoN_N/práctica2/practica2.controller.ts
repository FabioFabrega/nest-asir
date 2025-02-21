import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { practica2Service } from './practica2.service';
import { Createpractica2Dto } from './dto/create-practica2.dto';
import { Updatepractica2Dto } from './dto/update-practica2.dto';

@Controller('practica')
export class practica2Controller {
  constructor(private readonly practica2Service: practica2Service) {}

  @Post()
  async crearpractica(@Body() body: { id: number; título: string; dificualtad: string, fecha: string}) {
    return await this.practica2Service.crearpractica(body.id, body.título, body.dificualtad, body.fecha);
  }

  @Get()
  async obtenerTodos() {
    return await this.practica2Service.obtenerTodos();
  }

  @Get(':id')
  async obtenerPorId(@Param('id') id: number) {
    return await this.practica2Service.obtenerPorId(id);
  }
}
