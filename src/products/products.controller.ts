import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

interface datos {id?:string,size?:string};
type Product={articulo:string,precio:number,descripcion:string};
@Controller('products')
export class ProductsController {
    @Get()
    findProducts():string{
        return "Total de productos en el aula 2ASIR"
    }
    @Get('camiseta')
    findDetalle():string{
        return "Total de camisetas!!"; 
    }
    @Get('camiseta/roja')
    findAdios():string{
        return "Total de camisetas rojas!!"; 
    }   
    @Get(':id?/:size?')
  findWithOptional(@Param() params: datos) {
    const { id,size } = params;
    if (size && id) {
      return `Item ${id} de tamaño ${size}`;
    } else if (id) {
      return `Todos los items de tipo ${id}`;
    } else {
      return 'Todos los items';
    }
}
    @Post()
    insertaProducts(@Body() producto:Product){
        return `El producto ${producto.articulo} de precio ${producto.precio} se ha insertado correctamente`;
    }
    @Put()
    actualizaProducts():string{
        return "Producto ACTUALIZADO"
    }

    @Delete()
    borraProducts():string{
        return "Producto Borrado"
    }

}