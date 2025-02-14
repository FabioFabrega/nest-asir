import { Module} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { Producto } from './_1casoN_N/producto/entities/producto.entity';
import { ProductoModule } from './_1casoN_N/producto/producto.module';
import { ProfileModule } from './_caso1_1/profile/profile.module';
import { UserModule } from './_caso1_1/user/user.module';
import { UsersModule } from './_caso1_N/users/users.module';
import { TallaModule } from './_1casoN_N/talla/talla.module';
import { ProductotallaModule } from './_1casoN_N/productotalla/productotalla.module';
import { Producto2Module } from './_2casoN_N/producto2/producto2.module';
import { Talla2Module } from './_2casoN_N/talla2/talla2.module';

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
    UsuarioModule,
    BibliotecaModule,
    PokemonModule,
    PeliculasModule,
    UsersModule,
    UserModule,
    ProfileModule,
    ProductoModule,
    TallaModule,
    ProductotallaModule,
    Producto2Module,
    Talla2Module

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}