import { Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { AuthModule } from './_biblioteca/auth/auth.module';
import { AutorModule } from './_biblioteca/autor/autor.module';
import { LibroModule } from './_biblioteca/libro/libro.module';
import { UsuarioModule } from './_biblioteca/users/users.module';


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
    AuthModule,
    AutorModule,
    LibroModule,
    UsuarioModule


  ],
  controllers: [],
  providers: [],
})
export class AppModule {}