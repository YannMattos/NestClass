import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserRepository } from './usuario.repository';
import { CriarUsuario } from './dto/criarUsuario.dto';
import { UserEntity } from './usuario.entity';
import {v4 as uuid} from "uuid"
import { ListagemUsuariosDTO } from './dto/listaUsuarios.dto';

@Controller('usuarios')
export class UserController {
   
  constructor(private userRep: UserRepository) {}

  @Post()
  async criarUsuario(@Body() dadosUsuario: CriarUsuario) {
    
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
      usuario => new ListagemUsuariosDTO(
        usuario.id,
        usuario.nome
      )
    )
    return usuariosListados
  }
}
 