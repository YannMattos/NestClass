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
}