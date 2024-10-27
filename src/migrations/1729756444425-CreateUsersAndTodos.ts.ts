import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateUsersAndTodos1729756444425 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create User table
        await queryRunner.createTable(new Table({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                },
                {
                    name: 'username',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
            ],
        }));

        // Create Todo table
        await queryRunner.createTable(new Table({
            name: 'todo',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                },
                {
                    name: 'text',
                    type: 'varchar',
                },
                {
                    name: 'image',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'done',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updatedAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'deletedAt',
                    type: 'timestamp',
                    isNullable: true,
                },
                {
                    name: 'userId',
                    type: 'int',
                },
            ],
        }));

        // Create foreign key for Todo
        await queryRunner.createForeignKey('todo', new TableForeignKey({
            columnNames: ['userId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            onDelete: 'CASCADE',
            name: 'FK_userId', // Set the foreign key name here
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Use the same foreign key name for dropping
        await queryRunner.dropForeignKey('todo', 'FK_userId');
        await queryRunner.dropTable('todo');
        await queryRunner.dropTable('user');
    }
}