import {
  IsEmail,
  IsString,
  MinLength,
  Matches,
  IsOptional,
} from 'class-validator';
import { EmailValidation } from '../validacao/user_validation.validator';

export class UpdateUser {
  @IsString()
  @MinLength(3)
  @IsOptional()
  nome: string;

  @IsEmail()
  @EmailValidation({ message: 'Email já cadastrado' })
  @IsOptional()
  email: string;

  @MinLength(6)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'A senha deve ter ao menos 8 caracteres, com uma letra maiúscula, uma minúscula, um número e um caractere especial',
    },
  )
  @IsOptional()
  senha: string;
}
