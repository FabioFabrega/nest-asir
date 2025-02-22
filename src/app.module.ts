import { Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { profesor } from './Evaluación/_2casoN_N/profesor_diseña_práctica/entities/profesor.entity';
import { profesor2 } from './Evaluación/_caso1_N/profesor/entities/profesor2.entity';
import { profesor2Module } from './Evaluación/_caso1_N/profesor/profesor2.module';
import { profesorModule } from './Evaluación/_2casoN_N/profesor_diseña_práctica/profesor.module';
import { practica2Module } from './Evaluación/_2casoN_N/práctica2/practica2.module';
import { practicaModule } from './Evaluación/_1casoN_N/práctica/practica.module';
import { alumnoModule } from './Evaluación/_1casoN_N/alumno_realiza_práctica/alumno.module';
import { alumno2Module } from './Evaluación/_3casoN_N/alumno_hace_examen_teórico/alumno2.module';
import { examen2Module } from './Evaluación/_caso1_N/examen_teórico2/examen2.module';
import { examenModule } from './Evaluación/_3casoN_N/examen_teórico/examen.module';


@Module({
  imports: [ConfigModule.forRoot({isGlobal:true,}), 
    TypeOrmModule.forRoot({
      name:'base1',
      type:'mysql',
      host:process.env.URL,
      port:3306,
      username:process.env.USUARIO,
      password:process.env.PASSWORD,
      database: process.env.DBNAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:true
    }),
    TypeOrmModule.forRoot({
      name:'base2',
      type:'mysql',
      host:process.env.URL,
      port:3306,
      username:process.env.USUARIO,
      password:process.env.PASSWORD,
      database: process.env.DBNAME2,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:true
    }),
    PokemonModule,
    PeliculasModule,
    profesor2Module,
    profesorModule,
    practica2Module,
    practicaModule,
    alumnoModule,
    alumno2Module,
    examen2Module,
    examenModule


  ],
  controllers: [],
  providers: [],
})
export class AppModule {}