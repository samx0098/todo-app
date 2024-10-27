import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';
import { UserTodo } from './todo/entities/userTodo.entity';

export const AppDataSource = new DataSource({
  type: 'mariadb',
  host: '192.168.68.180',
  port: 3306,
  username: 'root',
  password: 'gr33nArr0w21m0Ng0',
  database: 'todo_app',
  synchronize: false,
  entities: ['src/**/*.entity.ts'],
//   migrations: ['src/migrations/*.ts'],
  // cli: {
  //   migrationsDir: "src/migrations"
});