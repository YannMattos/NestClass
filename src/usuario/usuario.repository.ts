import { Injectable } from "@nestjs/common";
import { UserEntity } from "./usuario.entity";


@Injectable()
export class UserRepository {
    private usuarios: UserEntity [] = [];

    async salvar(usuario: UserEntity) {
        this.usuarios.push(usuario);
    }

    async listagem() {
        return this.usuarios;
    }

    async verificarEmail(email: string){
        
        const verificacaoEmail = this.usuarios.find(
            usuario => usuario.email === email
        )

        return verificacaoEmail !== undefined
    }

    async atualiza(id: string, dadosAtualizados: Partial<UserEntity>){

        const verificaUsuario = this.usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        )

        if (!verificaUsuario){
            throw new Error("Usuario não existe")
        }

        Object.entries(dadosAtualizados).forEach(([
            chave, 
            valor
        ]) => {
            if(chave === 'id'){
                return
            }
            verificaUsuario[chave] = valor

            return verificaUsuario

        })
    }
}