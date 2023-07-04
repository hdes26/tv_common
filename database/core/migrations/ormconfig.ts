import { DataSource } from "typeorm";


export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'imaginamosdb.postgres',
  port: 5432,
  username: 'postgres',
  password: 'vo5uB9viNm8LV27qVz4S',
  database: 'postgres',
  logging: false,
  synchronize: false,
  entities: [
    "tv_common/database/core/entities/*.entity{.ts, .js}"
  ],
  migrations: ['tv_common/database/core/migrations/up/**/*{.ts,.js}'],
  migrationsTableName: "migrations",
});

