import { Global, Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { UserTodo } from './entities/userTodo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Global()
@Module({
  controllers: [TodoController],
  providers: [TodoService],
  imports: [TypeOrmModule.forFeature([UserTodo])]
})
export class TodoModule {}
