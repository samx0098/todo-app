import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserTodo } from 'src/todo/entities/userTodo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,UserTodo])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
