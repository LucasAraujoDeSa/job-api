import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class job1610581436124 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'job',
        columns: [
          {
            name: "id",
            type: "uuid",
            generationStrategy: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()'
          },
          {
            name: 'title',
            type: 'varchar'
          },
          {
            name: "description",
            type: 'text'
          },
          {
            name: 'company_name',
            type: 'varchar'
          },
          {
            name: 'contact',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('job')
    }

}
