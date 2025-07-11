import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUser } from './dto/create_users.dto';
import { UpdateUser } from './dto/update_user.dto';
import { UserService } from './user.service';

@Controller('usuarios')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() userData: CreateUser) {
    this.userService.createUser(userData);
    return {
      email: userData.email,
      message: 'Usuario criado com sucesso',
    };
  }

  @Get()
  async listUser() {
    const usersList = this.userService.listUsers();

    return usersList;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() newUserData: UpdateUser) {
    const atualizaUsuario = await this.userService.updateUser(id, newUserData);

    return {
      usuario: atualizaUsuario,
      message: 'Usuario atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const usuarioRemovido = await this.userService.deleteUser(id);

    return {
      usuario: usuarioRemovido,
      message: 'Usuario deletado com sucesso',
    };
  }
}
