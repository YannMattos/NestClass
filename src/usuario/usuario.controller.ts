import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { UserRepository } from './usuario.repository';
import { CriarUsuario } from './dto/criarUsuario.dto';
import { UserEntity } from './entity/usuario.entity';
import {v4 as uuid} from "uuid"
import { ListagemUsuariosDTO } from './dto/listaUsuarios.dto';
import { AtualizaUsuario } from './dto/atualizaUsuario.dto';

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

  @Put("/:id")
  async atualizarUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuario){
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
 