import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { alumnoService } from './alumno.service';
import { alumnoDto } from './dto/create-alumno.dto';
import { UpdatealumnoDto } from './dto/update-alumno.dto';

@Controller('alumno')
export class alumnoController {
  constructor(private readonly alumnoService: alumnoService) {}

  @Post()
  async crearalumno(
    @Body() body: { id: number; nif: number; nombre: string, apellido1: string, apellido2: string  }
  ) {
    return await this.alumnoService.crearalumno
    (body.id, body.nif, body.nombre, body.apellido1, body.apellido2 );
  }

  @Get(':id')
  async obteneralumno(@Param('id') id: number) {
    return await this.alumnoService.obteneralumno(id);
  }
}
