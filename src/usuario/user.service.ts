import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListUsersDTO } from './dto/list_users.dto';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { UpdateUser } from './dto/update_user.dto';
import { CreateUser } from './dto/create_users.dto';
import { scrypt, randomBytes, createCipheriv } from 'crypto';
import { promisify } from 'util';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async listUsers() {
    const usersSaveds = await this.userRepository.find();
    const usersView = usersSaveds.map(
      (user) => new ListUsersDTO(user.id, user.name, user.password),
    );

    return usersView;
  }

  async createUser(userDTO: CreateUser) {
    const iv = randomBytes(16);
    const key = (await promisify(scrypt)(userDTO.password, 'salt', 32)) as Buffer;
    const cipher = createCipheriv('aes-256-ctr', key, iv);

    const encryptedText = Buffer.concat([
      cipher.update(userDTO.password),
      cipher.final()
    ]).toString('hex');

    const user = this.userRepository.create({
      name: userDTO.name,
      email: userDTO.email,
      password: encryptedText, 
    });

    const savedUser = await this.userRepository.save(user);
    return savedUser;
  }

  async updateUser(id: string, userUpadateEntity: UpdateUser) {
    await this.userRepository.update(id, userUpadateEntity);
  }

  async deleteUser(id: string) {
    await this.userRepository.delete(id);
  }
}
