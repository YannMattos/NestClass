import { Injectable } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UserRepository {
  private usuarios: UserEntity[] = [];

  private buscaPorId(id: string) {
    const verificaUsuario = this.usuarios.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );

    if (!verificaUsuario) {
      throw new Error('Usuario não existe');
    }

    return verificaUsuario
  }

  async salvar(usuario: UserEntity) {
    this.usuarios.push(usuario);
  }

  async listagem() {
    return this.usuarios;
  }

  async verificarEmail(email: string) {
    const verificacaoEmail = this.usuarios.find(
      (usuario) => usuario.email === email,
    );

    return verificacaoEmail !== undefined;
  }

  async atualiza(id: string, dadosAtualizados: Partial<UserEntity>) {
    const usuario = this.buscaPorId(id)

    Object.entries(dadosAtualizados).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }
      usuario[chave] = valor;

      return usuario;
    });
  }

  async deletar(id: string) {
    const usuario = this.buscaPorId(id);

    this.usuarios = this.usuarios.filter(
        usuarioSalvo => usuarioSalvo.id !== id
    )

    return usuario
  }
}
