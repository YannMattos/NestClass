import { IsEmail, IsString, MinLength, Matches } from 'class-validator';
import { EmailValidation } from '../validacao/user_validation.validator';

export class CreateUser {
  @IsString()
  @MinLength(3)
  nome: string;

  @IsEmail()
  @EmailValidation({message: "Email já cadastrado"})
  email: string;

  @MinLength(6)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'A senha deve ter ao menos 8 caracteres, com uma letra maiúscula, uma minúscula, um número e um caractere especial',
    },
  )
  senha: string;
}
