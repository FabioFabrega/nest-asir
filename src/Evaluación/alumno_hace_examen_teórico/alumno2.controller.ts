import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { alumno2Service } from './alumno2.service';
import { alumno2Dto } from './dto/create-alumno2.dto';
import { Updatealumno2Dto } from './dto/update-alumno2.dto';

@Controller('alumno')
export class alumno2Controller {
  constructor(private readonly alumno2Service: alumno2Service) {}

  @Post()
  async crearalumno(
    @Body() body: { id: number; nif: number; nombre: string, apellido1: string, apellido2: string, nota: number  }
  ) {
    return await this.alumno2Service.crearalumno
    (body.id, body.nif, body.nombre, body.apellido1, body.apellido2, body.nota );
  }

  @Get(':id')
  async obteneralumno(@Param('id') id: number) {
    return await this.alumno2Service.obteneralumno(id);
  }
}
