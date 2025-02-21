import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { practicaService } from './practica.service';
import { CreatepracticaDto } from './dto/create-practica.dto';
import { UpdatepracticaDto } from './dto/update-practica.dto';

@Controller('practica')
export class practicaController {
  constructor(private readonly practicaService: practicaService) {}

  @Post()
  async crearpractica(@Body() body: { id: number; título: string; dificualtad: string, fecha: string, nota: number  }) {
    return await this.practicaService.crearpractica(body.id, body.título, body.dificualtad, body.fecha, body.nota);
  }

  @Get()
  async obtenerTodos() {
    return await this.practicaService.obtenerTodos();
  }

  @Get(':id')
  async obtenerPorId(@Param('id') id: number) {
    return await this.practicaService.obtenerPorId(id);
  }
}
