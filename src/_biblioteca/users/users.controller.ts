import { JwtAuthGuard } from "../auth/jwt/jwt.guard";
import { UsuarioService } from "./users.service";
import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { CreateUserDto } from "./dto/create-user.dto";
@Controller('usuario')
export class UserController {
  constructor(private userService: UsuarioService) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  getProfile(@Request() req) {
    return req.user;
  }
   @UseGuards(JwtAuthGuard)
    @Post()
    async create(
      @Body() body: { name: string, email: string, password: string}
    ) {
      return await this.userService.create
      (body.name, body.email, body.password );
    }
  
  
}