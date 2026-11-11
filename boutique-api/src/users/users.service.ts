import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { User } from './entities/user.entity.js';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(createUserDto: CreateUserDto) {
    const user: User = {
      id: this.users.length + 1,
      ...createUserDto,
    };

    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id === id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return {
      status: 200,
      message: 'User retrieved successfully',
      data: user,
    };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex(user => user.id === id);

    if (userIndex === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    this.users[userIndex] = {
      ...this.users[userIndex],
      ...updateUserDto,
    };

    return {
      status: 200,
      message: 'User updated successfully',
      data: this.users[userIndex],
    };
  }

  remove(id: number) {
    const userIndex = this.users.findIndex(user => user.id === id);

    if (userIndex === -1) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    const deletedUser = this.users.splice(userIndex, 1);

    return {
      status: 200,
      message: 'User deleted successfully',
      data: deletedUser,
    };
  }
}