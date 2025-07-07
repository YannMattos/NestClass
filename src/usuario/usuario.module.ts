import { Module } from "@nestjs/common";
import { UserController } from "./usuario.controller";
import { UserRepository } from "./usuario.repository";
import { EmailValidator } from "./validacao/user_validation.validator";

@Module({
    controllers: [UserController],
    providers: [UserRepository, EmailValidator]
})
export class UsuarioModule {}