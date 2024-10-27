import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable } from 'typeorm';
import { UserTodo } from '../../todo/entities/userTodo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(() => UserTodo, (userTodos) => userTodos.user)
//   @JoinTable()
  userTodos: UserTodo[];
}
