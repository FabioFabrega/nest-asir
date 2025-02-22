import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { profesorService } from './profesor.service';
import { CreateprofesorDto } from './dto/create-profesor.dto';
import { UpdateprofesorDto } from './dto/update-profesor.dto';

@Controller('profesor')
export class profesorController {
  constructor(private readonly profesorService: profesorService) {}

  @Post()
  async create(
    @Body() body: { id: number; nif: number; nombre: string, apellido1: string, apellido2: string, fecha: string  }
  ) {
    return await this.profesorService.create
    (body.id, body.nif, body.nombre, body.apellido1, body.apellido2, body.fecha );
  }

  @Get()
  findAll() {
    return this.profesorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profesorService.findOne(+id);
  }

}
