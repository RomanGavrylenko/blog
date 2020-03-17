import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUser1584386573080 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "username",
            type: "varchar",
            isNullable: false,
            isPrimary: true,
          },
          {
            name: "email",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "createAt",
            type: "timestamp with time zone",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("user");
  }
}
