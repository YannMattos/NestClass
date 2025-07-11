import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { EmailValidator } from "./validacao/user_validation.validator";
import { UserService } from "./user.service";
import { UserEntity } from "./entity/user.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity
        ])
    ],
    controllers: [
        UserController
    ],
    providers: [
        UserRepository, 
        EmailValidator,
        UserService
    ]
})
export class UserModule {}