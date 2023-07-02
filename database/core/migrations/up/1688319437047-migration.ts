import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1688319437047 implements MigrationInterface {
    name = 'Migration1688319437047'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."service_status_enum" AS ENUM('Ready', 'Finalized')`);
        await queryRunner.query(`ALTER TABLE "service" ADD "status" "public"."service_status_enum" NOT NULL DEFAULT 'Ready'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "service" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."service_status_enum"`);
    }

}
