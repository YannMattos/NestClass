import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListUsersDTO } from './dto/list_users.dto';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { UpdateUser } from './dto/update_user.dto';
import { CreateUser } from './dto/create_users.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async listUsers() {
    const usersSaveds = await this.userRepository.find();
    const usersView = usersSaveds.map(
      (user) => new ListUsersDTO(user.id, user.name),
    );

    return usersView;
  }

  async createUser(userDTO: CreateUser) {
    const user = this.userRepository.create({
      name: userDTO.name,
      email: userDTO.email,
      password: userDTO.password,
    });

    await this.userRepository.save(user);
  }

  async updateUser(id: string, userUpadateEntity: UpdateUser) {
    await this.userRepository.update(id, userUpadateEntity);
  }

  async deleteUser(id: string) {
    await this.userRepository.delete(id);
  }
}
