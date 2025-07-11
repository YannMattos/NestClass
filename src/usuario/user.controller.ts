import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUser } from './dto/create_users.dto';
import { UserEntity } from './entity/user.entity';
import {v4 as uuid} from "uuid"
import { ListUsersDTO } from './dto/list_users.dto';
import { UpdateUser } from './dto/update_user.dto';

@Controller('usuarios')
export class UserController {
   
  constructor(private userRep: UserRepository) {}

  @Post()
  async criarUsuario(@Body() dadosUsuario: CreateUser) {
    
    const usuarioEntity = new UserEntity();
    usuarioEntity.email = dadosUsuario.email;
    usuarioEntity.nome = dadosUsuario.nome;
    usuarioEntity.senha = dadosUsuario.senha;
    usuarioEntity.id = uuid()

    this.userRep.salvar(usuarioEntity)
    return {
      id: usuarioEntity.id,
      message: "Usuario criado com sucesso"
    };
  }

  @Get() 
  async listagemUsuarios() {
    const usuarios = this.userRep.listagem();
    const usuariosListados = (await usuarios).map(
      usuario => new ListUsersDTO(
        usuario.id,
        usuario.nome
      )
    )
    return usuariosListados
  }

  @Put("/:id")
  async atualizarUsuario(@Param('id') id: string, @Body() novosDados: UpdateUser){
    const atualizaUsuario = await this.userRep.atualiza(
      id,
      novosDados
    )

    return{
      usuario: atualizaUsuario,
      message: "Usuario atualizado com sucesso"
    }
  }

  @Delete("/:id")
  async deletarUsuario(@Param('id') id: string) {
    await this.userRep.deletar(id);
    return {
      message: "Usuario deletado com sucesso"
    };
  }

}
 