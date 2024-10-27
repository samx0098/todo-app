import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class UserTodo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column({ nullable: true })
  image: string;

  @Column({ default: false })
  done: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAT: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.userTodos)
  @JoinTable()
  user: User;
}
