import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'test123',
  database: 'postgres',
  logging: false,
  synchronize: false,
  entities: [
    "tv_common/database/core/entities/*.entity{.ts, .js}"
  ],
  migrations: ['tv_common/database/core/migrations/up/**/*{.ts,.js}'],
  migrationsTableName: "migrations",
});

