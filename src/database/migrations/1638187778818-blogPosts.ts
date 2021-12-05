import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class blogPosts1638187778818 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "blog_posts",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "summary",
            type: "text",
          },
          {
            name: "slug",
            type: "text",
          },
          {
            name: "description",
            type: "text",
          },
        ],
      }),
      true,
    );

    await Promise.all([
      queryRunner.createIndex(
        "blog_posts",
        new TableIndex({
          columnNames: ["slug"],
          isUnique: true,
        }),
      ),
      queryRunner.createIndex(
        "blog_posts",
        new TableIndex({
          columnNames: ["summary"],
          isFulltext: true,
        }),
      ),
    ]);
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("blog_posts");
  }
}
