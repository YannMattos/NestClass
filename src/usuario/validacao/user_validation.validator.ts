import {
    registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserRepository } from '../usuario.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({
  async: true,
})
export class EmailValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const validacaoEmailUsuario =
      await this.userRepository.verificarEmail(value);

    return !validacaoEmailUsuario;
  }
}

export const EmailValidation = (valitadionOptions: ValidationOptions) => {
    return (objeto: Object, propriedade: string) =>{
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: valitadionOptions,
            constraints: [],
            validator: EmailValidator
        })
    }
}