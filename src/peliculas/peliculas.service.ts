import { Injectable } from '@nestjs/common';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pelicula } from './entities/pelicula.entity';

@Injectable()
export class PeliculasService {
  constructor(
  @InjectRepository(Pelicula,'base1')
          private PeliculaRepository:Repository<Pelicula>
        ){}
    async create(createPeliculaDto: CreatePeliculaDto): Promise<Pelicula> {
        const Peli=this.PeliculaRepository.create(createPeliculaDto)
        return this.PeliculaRepository.save(Peli)
      }
      async findAll(titulo?: string,  año?: number): Promise<Pelicula[]> {
        const query = this.PeliculaRepository.createQueryBuilder('pelicula');
        if (titulo) {
          query.andWhere('pelicula.titulo LIKE :titulo', { titulo: `%${titulo}%` });
        }
        if (año) {
          query.orderBy('pelicula.año', 'ASC');
        }
        return query.getMany();
      }

  findOne(id: number) {
    return `This action returns a #${id} pelicula`;
  }

  update(id: number, updatePeliculaDto: UpdatePeliculaDto) {
    return `This action updates a #${id} pelicula`;
  }

  remove(id: number) {
    return `This action removes a #${id} pelicula`;
  }
}
